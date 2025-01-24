# backend-Bookbook
Vous êtes ici sur le backend de l'application web Bookbook.

## Structure du projet

Le projet est organisé comme suit :

- **`front/`** : Le code source du frontend, développé en React.
- **`back/`** : Le code source du backend, développé en Node.js.  Vous vous situez ici.
  
## Lancement du projet

Pour lancer le projet, placez vous dans le terminal du dossier front ou vous vous situez actuellement pour lire ce readme et lancez la commande suivante :
```bash
npm start
```
---
### Configuration des variables d'environnement

Ce projet utilise un fichier `.env` pour stocker des informations sensibles nécessaires à son fonctionnement. 

#### Exemple de fichier `.env`

Voici un exemple de contenu à placer dans le fichier `.env` :

```env
SUPABASE_URL=https://votre-url-supabase.supabase.co
SUPABASE_KEY=your-supabase-key
```

#### Description des variables

- **`SUPABASE_URL`** : L'URL de votre instance Supabase. Vous pouvez la trouver dans les paramètres de votre projet Supabase.
- **`SUPABASE_KEY`** : La clé API publique ou privée de votre instance Supabase. Elle est disponible dans l'onglet "API" de Supabase.

#### Instructions

1. Créez un fichier `.env` à la racine du projet si ce n'est pas déjà fait.
2. Copiez-collez le contenu de l'exemple ci-dessus.
3. Remplacez `votre-url-supabase.supabase.co` et `your-supabase-key` par les valeurs correctes pour votre projet Supabase.

