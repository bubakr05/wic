# Guide de Déploiement - Web Info Com

## Option 1 : GitHub Pages (Gratuit)

### Prérequis
- Compte GitHub
- Git installé sur votre machine

### Étapes

#### 1. Créer un repository GitHub
```bash
# Sur GitHub, créez un nouveau repository nommé "bubakr05.github.io"
```

#### 2. Initialiser Git et pousser le code
```bash
cd /mnt/okcomputer/output/app

# Initialiser Git
git init

# Ajouter le remote (remplacez par votre URL)
git remote add origin https://github.com/bubakr05/bubakr05.github.io.git

# Créer une branche gh-pages
git checkout -b gh-pages

# Ajouter les fichiers
git add dist/
git commit -m "Deploy to GitHub Pages"

# Pousser
git push origin gh-pages --force
```

#### 3. Activer GitHub Pages
1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** → **Pages**
3. Source : sélectionnez **Deploy from a branch**
4. Branch : sélectionnez **gh-pages** et dossier **/(root)**
5. Cliquez sur **Save**

Votre site sera disponible sur : `https://bubakr05.github.io`

---

## Option 2 : Netlify (Gratuit - Recommandé)

### Méthode A : Drag & Drop (La plus simple)
1. Allez sur [netlify.com](https://netlify.com) et créez un compte
2. Dans votre dashboard, glissez-déposez le dossier `dist/` 
3. C'est déployé ! 🎉

### Méthode B : Git Integration (Auto-deploy)
1. Poussez votre code sur GitHub
2. Sur Netlify, cliquez sur **"Add new site"** → **"Import an existing project"**
3. Connectez votre compte GitHub
4. Sélectionnez votre repository
5. Configuration :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
6. Cliquez sur **Deploy site**

---

## Option 3 : Vercel (Gratuit - Excellent pour React)

### Via CLI
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
cd /mnt/okcomputer/output/app
vercel --prod
```

### Via GitHub
1. Poussez votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Cliquez sur **"Add New Project"**
4. Importez votre repository
5. La configuration est détectée automatiquement
6. Cliquez sur **Deploy**

---

## Option 4 : Cloudflare Pages (Gratuit)

1. Allez sur [cloudflare.com](https://cloudflare.com)
2. Créez un compte
3. Allez dans **Pages** → **Create a project**
4. Connectez votre compte GitHub
5. Sélectionnez votre repository
6. Configuration :
   - **Framework preset** : Vite
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
7. Cliquez sur **Save and Deploy**

---

## Option 5 : Firebase Hosting (Gratuit)

```bash
# Installer Firebase CLI
npm install -g firebase-tools

# Se connecter
firebase login

# Initialiser
firebase init hosting

# Répondre aux questions :
# ? What do you want to use as your public directory? dist
# ? Configure as a single-page app? Yes
# ? Set up automatic builds and deploys with GitHub? No

# Déployer
firebase deploy
```

---

## Résumé des options

| Plateforme | Prix | Facilité | Domaine personnalisé | HTTPS |
|------------|------|----------|---------------------|-------|
| GitHub Pages | Gratuit | ⭐⭐⭐ | ✅ | ✅ |
| Netlify | Gratuit | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| Vercel | Gratuit | ⭐⭐⭐⭐⭐ | ✅ | ✅ |
| Cloudflare | Gratuit | ⭐⭐⭐⭐ | ✅ | ✅ |
| Firebase | Gratuit | ⭐⭐⭐ | ✅ | ✅ |

---

## 🚀 Recommandation

Pour un déploiement rapide sans configuration :
1. **Netlify** (drag & drop du dossier `dist/`)

Pour un déploiement automatique à chaque push :
1. **Vercel** ou **Netlify** avec GitHub integration

Pour rester sur GitHub :
1. **GitHub Pages** (configuration légèrement plus complexe)

---

## Commandes de build

Avant chaque déploiement, assurez-vous de builder :

```bash
cd /mnt/okcomputer/output/app
npm run build
```

Le dossier `dist/` contiendra les fichiers à déployer.
