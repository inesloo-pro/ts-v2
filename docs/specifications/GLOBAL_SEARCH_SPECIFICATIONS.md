# Global Search Mode - Specifications

## Vue d'ensemble

Le **Global Search Mode** est un système de recherche unifiée qui remplace les deux champs de recherche séparés (un pour les groupes, un pour les profils) par un seul champ de recherche global permettant de chercher à travers les groupes ET les profils simultanément.

Ce mode peut être activé/désactivé via le panneau de **Test Settings** accessible depuis le toggle Design A/B.

---

## Activation/Désactivation

**Localisation:** Test Settings → Design A (ou B) → Global Search Mode

**Type:** Toggle switch (ON/OFF)

**Valeur par défaut:** `false` (désactivé)

Lorsque désactivé, l'interface utilise les deux champs de recherche séparés existants.

---

## Comportement du mode recherche globale

### 1. Déclenchement du mode recherche

**Trigger:** L'utilisateur commence à taper dans le champ de recherche global

**Actions immédiates:**
- **Sauvegarde de l'état actuel:**
  - Current group sélectionné  
  - SPs sélectionnés (si applicable dans le contexte)
  - Active group (le groupe avec le radio button coché)
  
- **Entrée en mode recherche:**
  - Le panneau droit (right panel) passe en vue "SP selection"
  - Aucun SP n'est coché initialement  
  - Le current group (affichage du radio button) reste visible dans le panneau gauche

---

### 2. Affichage des résultats de recherche

**Minimum de caractères:** 2 caractères tapés

#### Panneau Gauche (Groups)

Affiche les groupes qui correspondent à la recherche via:
- **Match direct:** Le nom du groupe contient la query  
- **Match indirect:** Les noms des SPs inclus dans le groupe contiennent la query

**Tri:** Alphabétique (A-Z) sauf si le mode Pin est actif, auquel cas les groupes pinnés apparaissent en premier

#### Panneau Droit (Social Profiles)

Affiche les SPs dont le nom correspond à la recherche

**Recherche dans:**
- Nom du profil
- Handle du profil
- Platform du profil

**Tri:** Selon le mode actuel (Pin/Favorite/None)

---

### 3. Empty States

Si aucun résultat n'est trouvé:

**Panneau Gauche:**
```
No groups found
```

**Panneau Droit:**
```
No profiles found
```

Ces empty states doivent être schématiques et sobres, affichés centrés dans chaque panneau.

---

### 4. Positionnement du champ de recherche

**Positionnement logique:** Au-dessus des deux panneaux (groups + profiles), en position centrale ou étendue sur toute la largeur

**Alternative:** En haut du panneau de gauche avec icône de recherche visible des deux côtés

Le champ de recherche remplace complètement les deux icônes de recherche individuelles lorsque le Global Search Mode est activé.

---

## Actions utilisateur en mode recherche

### Cas 1: L'utilisateur sélectionne un groupe

**Action:** Click sur un groupe dans le panneau gauche

**Comportement:**
- **Sortir du mode recherche** immédiatement
- Appliquer le groupe sélectionné comme nouveau groupe actif  
- Effacer le champ de recherche
- Réinitialiser l'état "saved state"

---

### Cas 2: L'utilisateur commence à sélectionner des SPs

**Action:** Click sur un ou plusieurs SPs dans le panneau droit pour les cocher

**Comportement:**
- Rester en mode recherche (le champ de recherche reste actif et visible)
- Créer une **"unsaved selection"**
- Activer l'item "All profiles" dans le panneau gauche (radio button coché)  
- Les SPs cochés représentent la nouvelle sélection non sauvegardée

**Note:** L'utilisateur peut ensuite:
- Continuer à chercher et ajouter/retirer des SPs  
- Sauvegarder la sélection via le bouton "Save selection as a group"  
- Quitter le mode recherche (voir Cas 3)

---

### Cas 3: L'utilisateur quitte le mode recherche sans rien sélectionner

**Triggers possibles:**
- Appui sur la touche `Escape`  
- Click sur le bouton de fermeture (X) du champ de recherche  
- Click en dehors du dropdown (si applicable)

**Conditions:** Aucun groupe n'a été sélectionné ET aucun SP n'a été coché

**Comportement:**
- **Restaurer l'état sauvegardé:**
  - Rétablir le current group précédent  
  - Rétablir les SPs sélectionnés précédents  
  - Rétablir l'active group (radio button) précédent  
- Effacer le champ de recherche
- Quitter le mode recherche

**Important:** Si l'utilisateur a coché au moins un SP (même s'il l'a décoché ensuite), la sélection en cours est considérée comme modifiée et la restauration ne s'applique pas.

---

## Intégration avec les modes existants

### Mode Pin
- Les groupes/SPs pinnés apparaissent en premier dans les résultats de recherche  
- La recherche globale respecte l'ordre: Pinnés (A-Z) puis Non-pinnés (A-Z)

### Mode Favorite
- Les résultats de recherche maintiennent l'ordre alphabétique (A-Z) complet  
- Le filtre étoile (⭐) reste accessible en mode recherche pour filtrer uniquement les favoris

### Group Selection Stages
- **Stage 01:** Compatible avec la recherche globale (pas de groupe "All")  
- **Stage 02/03:** Compatible avec la recherche globale (groupe "All" disponible)

---

## Différences avec le mode de recherche séparé (Legacy)

| Aspect | Legacy (2 champs séparés) | Global Search Mode |
|--------|--------------------------|-------------------|
| **Nombre de champs** | 2 (groups + profiles) | 1 (global) |
| **Position** | Headers de chaque panneau | Au-dessus ou centralisé |
| **Recherche dans SP names** | Profiles uniquement | Groups ET Profiles |
| **Match indirect** | ❌ Non | ✅ Oui (SPs → Groups) |
| **Sauvegarde d'état** | ❌ Non | ✅ Oui |
| **Restauration possible** | ❌ Non | ✅ Oui (si quit sans sélection) |

---

## Implémentation technique

###  États React nécessaires

```typescript
const [globalSearchMode, setGlobalSearchMode] = useState(false);
const [globalSearchQuery, setGlobalSearchQuery] = useState('');

// Saved state for restore on exit without selection
const [savedViewingGroup, setSavedViewingGroup] = useState<string | null>(null);
const [savedSelectedProfiles, setSavedSelectedProfiles] = useState<Set<string> | null>(null);
const [savedActiveGroup, setSavedActiveGroup] = useState<string | null>(null);
```

### ✅ Implémenté (Phase 1 - COMPLET)

- ✅ **Option Toggle dans Settings:** Global Search Mode peut être activé/désactivé dans Test Settings (Design A & B)
- ✅ **Propagation du paramètre:** Le paramètre `globalSearchMode` est transmis à travers toute la chaîne de composants
- ✅ **États de sauvegarde:** États pour sauvegarder le contexte avant l'entrée en mode recherche
- ✅ **Logique de filtrage avancée:** 
  - Match direct par nom de groupe
  - Match indirect via les SPs contenus dans les groupes
  - Filtrage des SPs par nom, handle, platform
- ✅ **Minimum 2 caractères:** La recherche ne s'applique qu'à partir de 2 caractères tapés
- ✅ **UI du champ de recherche global:** Champ unique positionné au-dessus des deux panneaux
- ✅ **Entrée en mode recherche:** Sauvegarde automatique de l'état au premier caractère
- ✅ **Sortie du mode recherche:** Restauration de l'état si aucune sélection n'a été faite
- ✅ **Gestion des actions utilisateur:**
  - Sélection d'un groupe → Sortir du mode recherche ✅
  - Sélection de SPs → Créer unsaved selection + activer "All profiles" ✅
  - ESC sans sélection → Restaurer l'état sauvegardé ✅
  - Bouton X pour quitter la recherche ✅
- ✅ **Empty states schématiques:** Messages "No groups found" / "No profiles found" avec design amélioré
- ✅ **Masquage des icônes de recherche individuelles:** Les icônes 🔍 des headers disparaissent quand le mode global est actif

### 📋 À Implémenter (Phase 2 - Améliorations futures)

- ⏳ Highlighting des termes de recherche dans les résultats
- ⏳ Historique de recherche
- ⏳ Suggestions de recherche (autocomplete)
- ⏳ Recherche par tags/catégories

### 📋 À Implémenter (Phase 3 - Future)

- ⏳ Recherche fuzzy (tolérance aux fautes de frappe)  
- ⏳ Opérateurs de recherche avancés (AND, OR, NOT)  
- ⏳ Sauvegarde des recherches fréquentes

---

## Edge Cases & Comportements spéciaux

### 1. Search query < 2 caractères
- Afficher tous les groupes et profils normalement  
- Ne pas appliquer de filtrage  
- Le mode recherche est techniquement actif mais sans restriction

### 2. User tape puis efface complètement le texte
- Si aucune sélection n'a été faite: continuer à afficher l'état actuel (pas de restore automatique)  
- Le restore ne se produit que sur "exit explicite" (Escape, Close button)

### 3. Sélection d'un SP puis changement de query
- La sélection de SPs persiste tant que l'utilisateur reste en mode recherche  
- Les SPs cochés restent cochés même si le filtre change et les masque temporairement

### 4. Switching between Pin/Favorite modes pendant la recherche
- La recherche continue avec le nouveau mode de tri  
- Les résultats sont réorganisés selon le nouveau mode  
- La sélection en cours n'est pas affectée

---

## Tests manuels recommandés

### Test 1: Recherche basique
1. Activer Global Search Mode dans Settings
2. Ouvrir le Group Selector  
3. Taper "app" → Vérifier que "Apple" (SP) et tout groupe contenant "app" apparaissent  
4. Vérifier également les groupes contenant des SPs avec "app" dans le nom

### Test 2: Sélection de groupe
1. Rechercher un groupe  
2. Cliquer dessus  
3. Vérifier que le mode recherche se ferme et que le groupe est activé

### Test 3: Création d'unsaved selection
1. Rechercher des profils  
2. Cocher 2-3 profils  
3. Vérifier que "All profiles" se coche dans le panneau gauche  
4. Vérifier que le mode recherche reste actif

### Test 4: Restauration d'état
1. Noter le groupe actif et les SPs sélectionnés  
2. Entrer en mode recherche (taper quelque chose)  
3. Ne rien sélectionner  
4. Appuyer sur Escape  
5. Vérifier que l'état précédent est restauré

### Test 5: Empty states
1. Rechercher "zzzzzz" (texte introuvable)  
2. Vérifier les messages "No groups found" et "No profiles found"

---

## Compatibilité

✅ **Compatible avec:**
- Design A et Design B  
- Pin mode, Favorite mode, None mode  
- Group Selection Stages 01, 02, 03  
- Many SP Simulation mode  
- Sort by Availability mode

❌ **Non compatible avec:**
- Aucune incompatibilité connue

---

## Roadmap & Améliorations futures

### Phase 1 (Actuelle)
- ✅ Recherche globale basique  
- ✅ Match direct et indirect  
- ✅ Sauvegarde et restauration d'état  
- ✅ Empty states

### Phase 2 (À venir)
- 🔲 Highlighting des termes de recherche dans les résultats  
- 🔲 Historique de recherche  
- 🔲 Suggestions de recherche (autocomplete)  
- 🔲 Recherche par tags/catégories

### Phase 3 (Future)
- 🔲 Recherche fuzzy (tolérance aux fautes de frappe)  
- 🔲 Opérateurs de recherche avancés (AND, OR, NOT)  
- 🔲 Sauvegarde des recherches fréquentes

---

## Changements dans l'interface

### Avant (Legacy Mode)
```
┌─────────────────────────────────┬─────────────────────────────────┐
│ Groups                    [🔍]  │ Social Profiles           [🔍]  │
│                                 │                                 │
│ ☑ All profiles                  │ Select all / Unselect all      │
│ ○ Campaign 2026                 │ ☑ Apple                         │
│ ○ Big 3                         │ ☑ Microsoft                     │
│ ...                             │ ...                             │
└─────────────────────────────────┴─────────────────────────────────┘
```

### Après (Global Search Mode)
```
┌─────────────────────────────────────────────────────────────────┐
│              [🔍 Search groups & profiles...]         [✕]       │
├─────────────────────────────────┬─────────────────────────────────┤
│ Groups                          │ Social Profiles                 │
│                                 │                                 │
│ ☑ All profiles                  │ Select all / Unselect all      │
│ ○ Campaign 2026                 │ ☐ Apple                         │
│ ○ Big 3 (matches: Apple...)    │ ☐ Microsoft                     │
│ ...                             │ ...                             │
└─────────────────────────────────┴─────────────────────────────────┘
```

---

**Version:** 1.0  
**Date:** 2025-01-XX  
**Auteur:** Système de gestion de profils