# Spécification des 3 Stages de Sélection de Groupes

## Vue d'ensemble

Le système de gestion de profils implémente désormais **3 stages distincts** de sélection de groupes, contrôlés via le paramètre `Group Selection Stage` dans les paramètres de test. Chaque stage offre un comportement différent concernant :
- L'existence du groupe "All"
- Les limites de profils par groupe
- La gestion des sélections non sauvegardées (unsaved selections)

---

## Stage 01 : Sélection Basique

### Caractéristiques
- ❌ **Pas de groupe "All"**
- ❌ **Pas de limite de 50 SPs par groupe**
- ⚡ **Unsaved selections uniquement**

### Comportement Détaillé

#### 1. Ouverture du Dropdown "All Profiles"
- **Action** : Cliquer sur "All profiles" dans le dropdown
- **Résultat** : 
  - Ouvre le panneau de droite avec **AUCUN SP sélectionné**
  - Aucune activation de groupe
  - État initial vide

#### 2. Sélection de Profils
- **Action** : Commencer à sélectionner des SPs
- **Résultat** :
  - Bascule immédiatement vers l'état "Unsaved selection"
  - Bouton "Save selection as a group" apparaît en bas du panneau
  - Pas de détection automatique de groupe

#### 3. Bouton "Select All"
- **Action** : Cliquer sur "Select all"
- **Résultat** :
  - Sélectionne tous les profils visibles
  - **Smart Group Detection** : Vérifie si la sélection correspond à un groupe existant (y compris un groupe personnalisé contenant tous les SPs)
  - Si correspondance trouvée → Active ce groupe automatiquement
  - Sinon → Reste en "Unsaved selection"
  - Offre de sauvegarder comme groupe (si pas de correspondance)

#### 4. Click sur "Unsaved Selection" dans le Dropdown
- **Action** : Cliquer sur l'item "Unsaved selection" dans le dropdown de groupes
- **Résultat** :
  - Déclenche le workflow de création de groupe
  - Ouvre le modal `CreateGroupModal`

### Bouton Save
- **Condition d'affichage** : Visible dès qu'il y a plus de 1 SP sélectionné
- **État désactivé** : Si plus de 50 SPs sont sélectionnés
- **Message** : "Groups are limited to 50 social profiles"

### Interface "All Profiles"
- **Design** : L'item "All profiles" possède un border-bottom pour le distinguer visuellement
- **Action de droite** : Chevron pointant vers la droite (pour ouvrir le panneau)

---

## Stage 02 : Sélection Avancée avec Détection (Par défaut)

### Caractéristiques
- ✅ **Groupe "All" existe**
- ✅ **Pas de limite de 50 SPs par groupe**
- 🔍 **Détection automatique du groupe "All"**

### Comportement Détaillé

#### 1. Ouverture du Dropdown "All Profiles"
- **Action** : Cliquer sur "All profiles" dans le dropdown
- **Résultat** :
  - Ouvre le panneau de droite avec **TOUS les SPs automatiquement sélectionnés**
  - Active immédiatement le groupe "All"
  - Met à jour la navbar SP avec le groupe "All"

#### 2. Modification de la Sélection
- **Action** : Ajouter ou retirer des SPs après avoir activé "All"
- **Résultat** :
  - Bascule vers "Unsaved selection"
  - Désactive le groupe "All"
  - Bouton "Save selection as a group" apparaît

#### 3. Bouton "Select All"
- **Action** : Cliquer sur "Select all" depuis la vue "All profiles"
- **Résultat** :
  - **Si tous les profils sont sélectionnés** :
    - Détecte et active automatiquement le groupe "All"
    - Met à jour la navbar SP
  - **Si pas tous les profils** (filtre actif par ex.) :
    - Vérifie si la sélection correspond à un autre groupe existant
    - Sinon, crée une "Unsaved selection"

#### 4. Smart Group Detection
- **Fonctionnement** : À chaque modification de sélection :
  1. Compare la sélection actuelle avec tous les groupes existants
  2. Si correspondance exacte trouvée → active ce groupe automatiquement
  3. Sinon → reste en "Unsaved selection"

#### 5. Click sur "Unsaved Selection" dans le Dropdown
- **Action** : Cliquer sur l'item "Unsaved selection" dans le dropdown de groupes
- **Résultat** :
  - Déclenche le workflow de création de groupe
  - Ouvre le modal `CreateGroupModal`

### Bouton Save
- **Condition d'affichage** : Visible dès qu'il y a plus de 1 SP sélectionné
- **Exception Stage 02/03** : Caché quand TOUS les SPs sont sélectionnés (car groupe "All" existe déjà)
- **État désactivé** : Si plus de 50 SPs sont sélectionnés
- **Message** : "Groups are limited to 50 social profiles"

### Interface "All Profiles"
- **Design** : L'item "All profiles" possède un border-bottom pour le distinguer visuellement
- **Action de droite** : Radio button (pin/favorite + radio)

---

## Stage 03 : Sélection Avancée + Unsaved Utilisables

### Caractéristiques
- ✅ **Groupe "All" existe**
- ✅ **Pas de limite de 50 SPs par groupe**
- 🔍 **Détection automatique du groupe "All"**
- 🚀 **Unsaved selections directement utilisables dans la navbar**

### Comportement Détaillé

#### Différences avec Stage 02

##### 1. Unsaved Selections Utilisables
- **Comportement** :
  - Les sélections non sauvegardées fonctionnent comme des groupes temporaires
  - Peuvent être utilisées directement dans la SP navbar
  - Pas besoin de créer un groupe pour les utiliser

##### 2. Click sur "Unsaved Selection" dans le Dropdown
- **Action** : Cliquer sur l'item "Unsaved selection" dans le dropdown de groupes
- **Résultat** :
  - **NE déclenche PAS** le workflow de création de groupe
  - Utilise directement la sélection comme groupe actif
  - Ferme le dropdown et met à jour la navbar

##### 3. Création de Groupe
- **Méthode uniquement via** :
  - Le bouton "Save selection as a group" dans le panneau de droite
  - OU le petit bouton "Save" dans la navbar SP (si implémenté)

##### 4. Autres Comportements
- Identiques au Stage 02 :
  - Détection automatique du groupe "All"
  - Smart group detection
  - Activation immédiate lors du click sur "All profiles"

### Bouton Save
- **Condition d'affichage** : Visible dès qu'il y a plus de 1 SP sélectionné
- **État désactivé** : Si plus de 50 SPs sont sélectionnés
- **Message** : "Groups are limited to 50 social profiles"

### Interface "All Profiles"
- **Design** : L'item "All profiles" possède un border-bottom pour le distinguer visuellement
- **Action de droite** : Radio button (pin/favorite + radio)

---

## Comparaison Rapide

| Fonctionnalité | Stage 01 | Stage 02 | Stage 03 |
|----------------|----------|----------|----------|
| Groupe "All" existe | ❌ | ✅ | ✅ |
| Limite 50 SPs | ❌ | ❌ | ❌ |
| Click "All profiles" → SPs sélectionnés | ❌ Non | ✅ Tous | ✅ Tous |
| Click "All profiles" → Groupe activé | ❌ Non | ✅ "All" | ✅ "All" |
| Détection auto groupe "All" | ❌ | ✅ | ✅ |
| Smart Group Detection | ❌ | ✅ | ✅ |
| Click "Unsaved" → Crée groupe | ✅ | ✅ | ❌ |
| Click "Unsaved" → Utilise sélection | ❌ | ❌ | ✅ |
| Unsaved utilisable navbar | ❌ | ❌ | ✅ |

---

## Implémentation Technique

### Fichiers Modifiés

1. **`/src/app/App.tsx`**
   - Ajout du state `groupSelectionStage`
   - Valeur par défaut : `'stage02'`
   - Passage du prop à tous les composants enfants

2. **`/src/app/components/TestSettingsModal.tsx`**
   - Segmented control à 3 boutons : Stage 01, Stage 02, Stage 03
   - Descriptions détaillées de chaque stage

3. **`/src/app/components/DesignToggle.tsx`**
   - Ajout du prop `groupSelectionStage`
   - Passage au `TestSettingsModal`

4. **`/src/app/components/GroupSelectionModal.tsx`**
   - Ajout du prop `groupSelectionStage`
   - Passage au `ProfileManager`

5. **`/src/app/components/ProfileManager.tsx`**
   - **Fonction `handleGroupChange()`** :
     - Stage 01 : Ouvre avec 0 SP sélectionné
     - Stage 02/03 : Ouvre avec tous les SPs sélectionnés et active "All"
   
   - **Fonction `selectAll()`** :
     - Stage 01 : Crée uniquement unsaved selection
     - Stage 02/03 : Détecte "All" si tous profils, sinon smart detection, sinon unsaved

### Logique de Détection

```typescript
// Stage 01 : Jamais de détection "All"
if (groupSelectionStage === 'stage01') {
  // Toujours unsaved
  onUnsavedSelection(allIds);
}

// Stage 02 & 03 : Détection "All" + Smart detection
else if (groupSelectionStage === 'stage02' || groupSelectionStage === 'stage03') {
  // 1. Vérifie si TOUS les profils sont sélectionnés
  if (selectedArray.length === allProfileIds.length) {
    // Activer groupe "All"
    onGroupChange('all', 'All profiles', allIds);
    return;
  }
  
  // 2. Sinon, smart group detection
  for (const [groupKey, profileIds] of Object.entries(groupProfiles)) {
    if (matches) {
      onGroupChange(groupKey, matchedGroup.name, profileIds);
      return;
    }
  }
  
  // 3. Aucune correspondance → unsaved selection
  onUnsavedSelection(allIds);
}
```

---

## Cas d'Usage Recommandés

### Stage 01 : MVP / Prototypage
- **Quand l'utiliser** :
  - Phase de prototypage rapide
  - Besoin de flexibilité maximale
  - Pas de contrainte de performance avec de nombreux profils
  - Utilisateurs avancés qui gèrent manuellement leurs groupes

### Stage 02 : Production Standard (Défaut)
- **Quand l'utiliser** :
  - Application en production
  - Besoin d'UX guidée avec détection automatique
  - Utilisateurs qui bénéficient du groupe "All" prédéfini
  - Workflow standard de création de groupes via modal

### Stage 03 : Production Avancée
- **Quand l'utiliser** :
  - Power users qui testent rapidement des combinaisons
  - Besoin de flexibilité maximale sans friction
  - Sélections temporaires fréquentes
  - Workflow de "test & save later"

---

## Migration entre Stages

### De Stage 01 → Stage 02
- **Impact** : Le groupe "All" devient disponible
- **Action utilisateur** : Aucune (nouveau groupe accessible)
- **Data** : Aucune migration nécessaire

### De Stage 02 → Stage 03
- **Impact** : Les unsaved selections deviennent utilisables
- **Action utilisateur** : Aucune (amélioration UX)
- **Data** : Aucune migration nécessaire

### De Stage 03 → Stage 02
- **Impact** : Les unsaved selections ne sont plus directement utilisables
- **Action utilisateur** : Doit sauvegarder les sélections comme groupes
- **Data** : Les sélections non sauvegardées sont perdues au reload

### De Stage 02/03 → Stage 01
- **Impact** : Le groupe "All" n'est plus disponible
- **Action utilisateur** : Doit recréer une sélection manuelle
- **Data** : Le groupe "All" reste en data mais n'est plus accessible

---

## Notes de Développement

### Limitation de 50 SPs
- **Note importante** : Bien que l'ancien système "Limit to 50 SPs per group" ait été remplacé par les 3 stages, la **limite de 50 SPs reste active** pour le bouton "Save selection as a group"
- **Raison** : Contrainte business/technique indépendante du système de stages
- **Affichage** :
  - Si `selectedProfiles.size > 50` : Bouton désactivé avec message d'erreur
  - Si `selectedProfiles.size ≤ 50` : Bouton actif

### Récupération Avatar Personnalisé
- **Fix récent** : Correction de la récupération de l'avatar depuis les données du groupe
- **Logique** :
  ```typescript
  const currentGroupData = getGroupById(currentGroup);
  const groupBadge = currentGroupData?.badge || groupBadges[currentGroup] || 'BA';
  const groupAvatar = currentGroupData?.avatar || groupAvatars[currentGroup];
  ```
- **Priorité** : Données du groupe > Mapping statique > Valeur par défaut

---

## Changelog

### Version 1.1.0 (2026-03-10)
- ✅ **Stage 01** : "Select All" détecte maintenant les groupes existants avec tous les SPs (pas seulement "All")
- ✅ **Stage 02 & 03** : L'action de droite pour "All profiles" devient un radio button (pin/favorite + radio)
- ✅ **Stage 02 & 03** : Le bouton "Save as a group" est caché quand tous les SPs sont sélectionnés
- ✅ **Stage 01, 02 & 03** : Ajout d'un border-bottom à l'item "All profiles" pour distinction visuelle

### Version 1.0.0
- ✅ Implémentation complète des 3 stages
- ✅ Remplacement de `limitTo50SPsPerGroup` par `groupSelectionStage`
- ✅ Segmented control dans TestSettingsModal
- ✅ Logique de détection automatique "All" pour Stage 02/03
- ✅ Smart group detection pour tous les stages applicables
- ✅ Unsaved selections utilisables en Stage 03
- ✅ Fix récupération avatar personnalisé des groupes

---

## Roadmap Future (Optionnel)

### Améliorations Potentielles
1. **Persistance des Unsaved Selections (Stage 03)**
   - Sauvegarder en localStorage pour éviter la perte au reload
   - Afficher un indicateur visuel "temporaire" vs "sauvegardé"

2. **Historique des Sélections**
   - Garder un historique des dernières sélections non sauvegardées
   - Accès rapide via dropdown

3. **Conversion Unsaved → Saved**
   - Bouton inline dans la navbar pour sauvegarder rapidement
   - Sans passer par le modal complet

4. **Stage 04 : Hybride**
   - Combinaison Stage 01 + Stage 03
   - Pas de groupe "All" mais unsaved utilisables
   - Pour power users qui ne veulent pas de "All" prédéfini

---

**Document créé le** : 2026-03-10  
**Dernière mise à jour** : 2026-03-10  
**Version** : 1.1.0  
**Auteur** : Équipe développement