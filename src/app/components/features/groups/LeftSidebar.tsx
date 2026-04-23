import { useState, useEffect, useRef } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import svgPaths from "../../../../imports/Iconosquare-2-1/svg-q50ckweg68";
import { getL1Page, getEffectiveSubPages, type L1MenuItem, type SubPage } from '../../../navigation/navConfig';

const DRAG_TYPE = 'SIDEBAR_ITEM';

interface DraggableItemProps {
  item: SubPage;
  index: number;
  isActive: boolean;
  onMove: (from: number, to: number) => void;
}

function DraggableItem({ item, index, isActive, onMove }: DraggableItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: DRAG_TYPE,
    item: () => ({ index }),
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const [, drop] = useDrop<{ index: number }>({
    accept: DRAG_TYPE,
    hover(dragged) {
      if (dragged.index !== index) {
        onMove(dragged.index, index);
        dragged.index = index;
      }
    },
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{ opacity: isDragging ? 0.4 : 1, cursor: 'grab' }}
      className={`h-[32px] relative rounded-[8px] shrink-0 w-full transition-colors ${
        isActive ? 'bg-[rgba(255,255,255,0.4)]' : 'hover:bg-[rgba(0,0,0,0.02)]'
      }`}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center gap-[6px] px-[12px] py-[8px] relative size-full">
          {/* Drag handle dots */}
          <div className="relative shrink-0 size-[10px] opacity-40">
            <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 10 10">
              <circle cx="3" cy="3" r="1" fill="#76869A" />
              <circle cx="7" cy="3" r="1" fill="#76869A" />
              <circle cx="3" cy="7" r="1" fill="#76869A" />
              <circle cx="7" cy="7" r="1" fill="#76869A" />
            </svg>
          </div>
          <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">
            {item.label}
          </p>
        </div>
      </div>
    </div>
  );
}

interface LeftSidebarProps {
  activeMenuItem: L1MenuItem;
  onMenuItemChange: (menuItem: L1MenuItem) => void;
  activeSubMenuItem: string;
  onSubMenuItemChange: (subItem: string) => void;
}

export function LeftSidebar({ activeMenuItem, onMenuItemChange, activeSubMenuItem, onSubMenuItemChange }: LeftSidebarProps) {
  const l1Page = getL1Page(activeMenuItem);
  const baseItems = getEffectiveSubPages(activeMenuItem);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isReorderMode, setIsReorderMode] = useState(false);
  const [draftItems, setDraftItems] = useState<SubPage[]>([]);
  const [savedOrders, setSavedOrders] = useState<Partial<Record<L1MenuItem, string[]>>>({});

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!isDropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isDropdownOpen]);

  // Reset reorder mode when switching L1
  useEffect(() => {
    setIsReorderMode(false);
    setIsDropdownOpen(false);
  }, [activeMenuItem]);

  const getOrderedItems = (): SubPage[] => {
    const order = savedOrders[activeMenuItem];
    if (!order) return baseItems;
    return order.map(id => baseItems.find(i => i.id === id)).filter((i): i is SubPage => !!i);
  };

  const displayedItems = isReorderMode ? draftItems : getOrderedItems();

  const handleEnterReorder = () => {
    setDraftItems([...getOrderedItems()]);
    setIsReorderMode(true);
    setIsDropdownOpen(false);
  };

  const handleSaveOrder = () => {
    setSavedOrders(prev => ({ ...prev, [activeMenuItem]: draftItems.map(i => i.id) }));
    setIsReorderMode(false);
  };

  const handleCancelOrder = () => {
    setIsReorderMode(false);
  };

  const handleMove = (from: number, to: number) => {
    setDraftItems(prev => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  };

  const isProfileSection = activeMenuItem === 'analytics';
  const canReorder = baseItems.length > 1;

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col h-full shrink-0" style={{ width: '196px' }}>

        {/* Logo area */}
        <div className="content-stretch flex gap-[24px] items-center px-[12px] py-[20px] relative shrink-0">
          <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0" style={{ width: '121.636px' }}>
            <div className="aspect-[24.0009765625/24] h-full relative shrink-0">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.001 24">
                <path d={svgPaths.p23951e00} fill="#76869A" />
              </svg>
            </div>
            <div className="aspect-[85.63534545898438/14.494268417358398] flex-[1_0_0] min-w-px relative">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.6353 14.4934">
                <path d={svgPaths.p2d4abaf0} fill="#1D1D1B" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[16px] cursor-pointer hover:opacity-70 transition-opacity">
            <div className="absolute inset-[7.5%_0]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 13.6">
                <path clipRule="evenodd" d={svgPaths.p18e33600} fill="#76869A" fillRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation Content */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full pl-[20px]">

          {/* Section header */}
          <div className="relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center justify-between pb-[8px] pl-[12px] pr-[8px] pt-[4px] relative size-full rounded-[8px]">
                {/* Icon + Label */}
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                  <div className="relative shrink-0 size-[12px]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <g>
                        <path d={svgPaths.p3dcb8000} fill="#76869A" />
                        <path d={svgPaths.p2bf998f0} fill="#76869A" />
                        <path d={svgPaths.pe248a00} fill="#76869A" />
                        <path clipRule="evenodd" d={svgPaths.p2744ae80} fill="#76869A" fillRule="evenodd" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">
                    {l1Page?.label ?? ''}
                  </p>
                </div>

                {/* Actions: 3-dots + Plus */}
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  {/* 3-dots with dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <div
                      className="relative shrink-0 size-[16px] cursor-pointer hover:opacity-70"
                      onClick={() => setIsDropdownOpen(o => !o)}
                    >
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g>
                          <path d={svgPaths.p27bff300} fill="#76869A" />
                          <path d={svgPaths.p3f726870} fill="#76869A" />
                          <path d={svgPaths.p19f89780} fill="#76869A" />
                        </g>
                      </svg>
                    </div>

                    {isDropdownOpen && (
                      <div className="absolute left-0 top-full mt-[4px] bg-white rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] border border-[#e8edf0] z-50 w-[148px] py-[4px]">
                        {canReorder ? (
                          <button
                            className="w-full text-left px-[12px] py-[7px] font-['Gilroy:Medium',sans-serif] text-[12px] text-[#1d1d1b] hover:bg-[#f5f7f8] rounded-[6px] tracking-[-0.072px]"
                            onClick={handleEnterReorder}
                          >
                            Change order
                          </button>
                        ) : (
                          <div className="px-[12px] py-[7px] font-['Gilroy:Medium',sans-serif] text-[12px] text-[#c0cfd8] tracking-[-0.072px]">
                            Change order
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Plus */}
                  <div className="relative shrink-0 size-[16px] cursor-pointer hover:opacity-70">
                    <div className="absolute inset-[21.25%]">
                      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.2 9.2">
                        <path d={svgPaths.p2dc41580} fill="#76869A" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-menu items */}
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
            {isReorderMode ? (
              <>
                {draftItems.map((item, index) => (
                  <DraggableItem
                    key={item.id}
                    item={item}
                    index={index}
                    isActive={item.id === activeSubMenuItem}
                    onMove={handleMove}
                  />
                ))}
                {/* Save / Cancel */}
                <div className="flex gap-[6px] mt-[8px] px-[4px]">
                  <button
                    onClick={handleSaveOrder}
                    className="flex-1 py-[5px] bg-[#1d1d1b] rounded-[6px] font-['Gilroy:Semibold',sans-serif] text-[11px] text-white tracking-[-0.044px] hover:opacity-80 transition-opacity"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelOrder}
                    className="flex-1 py-[5px] bg-[rgba(0,0,0,0.05)] rounded-[6px] font-['Gilroy:Semibold',sans-serif] text-[11px] text-[#76869a] tracking-[-0.044px] hover:opacity-80 transition-opacity"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                {displayedItems.map((item) => {
                  const isActive = item.id === activeSubMenuItem;
                  return (
                    <div
                      key={item.id}
                      className={`h-[32px] relative rounded-[8px] shrink-0 w-full cursor-pointer transition-colors ${
                        isActive ? 'bg-[rgba(255,255,255,0.4)]' : 'hover:bg-[rgba(0,0,0,0.02)]'
                      }`}
                      onClick={() => onSubMenuItemChange(item.id)}
                    >
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
                          <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">
                            {item.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Create a board — Profile section only */}
                {isProfileSection && (
                  <div className="h-[32px] relative rounded-[8px] shrink-0 w-full cursor-pointer hover:bg-[rgba(0,0,0,0.02)] transition-colors">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative size-full">
                        <div className="relative shrink-0 size-[16px]">
                          <div className="absolute inset-[21.25%]">
                            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.2 9.2">
                              <path d={svgPaths.p2dc41580} fill="#76869A" />
                            </svg>
                          </div>
                        </div>
                        <p className="font-['Gilroy:Semibold',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#76869a] text-[12px] tracking-[-0.072px] whitespace-nowrap">
                          Create a board
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Spacer */}
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px w-full" />
        </div>
      </div>
    </DndProvider>
  );
}
