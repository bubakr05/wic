# Web Info Com - Agence Digitale

Site web moderne avec animations 3D, inspiré du style Marcelo Design X.

## 🚀 Déploiement Rapide

### Option 1 : Netlify (Recommandé - 2 minutes)

1. Allez sur [netlify.com](https://netlify.com)
2. Créez un compte (gratuit)
3. Glissez-déposez le dossier `dist/` sur la page
4. ✅ C'est en ligne !

### Option 2 : GitHub Pages

#### Méthode automatique (Script)

```bash
# Rendre le script exécutable
chmod +x deploy.sh

# Exécuter le déploiement
./deploy.sh
```

#### Méthode manuelle

```bash
# Build
npm run build

# Déployer
git add dist/
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages
```

#### Méthode GitHub Actions (Auto-deploy)

Le fichier `.github/workflows/deploy.yml` est déjà configuré. 

1. Poussez ce code sur GitHub
2. Allez dans **Settings** → **Pages**
3. Source : **GitHub Actions**
4. Chaque push sur `main` déploiera automatiquement

### Option 3 : Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

---

## 🛠️ Développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build
```

---

## 📁 Structure

```
├── src/
│   ├── sections/       # Composants de sections
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── dist/               # Build de production
├── deploy.sh           # Script de déploiement
└── DEPLOY_GUIDE.md     # Guide complet
```

---

## ✨ Fonctionnalités

- 🎨 Design moderne inspiré Marcelo Design X
- 🎮 Animations 3D CSS (cube, parallax, floating)
- 💎 Glassmorphism effects
- 🌈 Néon gradients & glow effects
- 📱 100% Responsive
- ⚡ Performance optimisée
- ♿ Accessibilité (WCAG)

---

## 📝 License

© 2024 Web Info Com. Tous droits réservés.
