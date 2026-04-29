# Changelog

## [Restructure] - 2026-04-15

### Changed
- **Project Structure**: Reorganized entire codebase for better scalability
  - Moved all documentation to `/docs/` with categorization (specifications, technical)
  - Implemented feature-based architecture in `/src/app/components/features/`
    - `/features/groups/` - Group management components
    - `/features/navigation/` - Navigation and SP selector components
    - `/features/profiles/` - Profile management components
    - `/features/views/` - View components (Calendar, All Posts)
  - Created `/src/app/components/common/` for shared components
  - Moved all SVG icons to `/src/assets/icons/`
  - Created `/src/app/hooks/` for custom hooks
  - Created `/src/app/types/` for TypeScript type definitions

### Removed
- Removed obsolete `default_shadcn_theme.css`
- Removed unused `guidelines/` directory
- Consolidated duplicate Figma import files

### Added
- Created comprehensive `README.md` with project structure documentation
- Added `.gitignore` for better version control
- Created feature exports index at `/src/app/components/features/index.ts`
- Updated all import paths to reflect new structure

### Fixed
- Fixed "Failed to fetch dynamically imported module" error by reorganizing imports
- Updated all relative import paths across the project
- Consolidated SVG imports to use centralized assets directory
