#!/bin/bash

# Script de déploiement pour GitHub Pages
# Usage: ./deploy.sh

echo "🚀 Déploiement sur GitHub Pages..."

# Vérifier si git est initialisé
if [ ! -d ".git" ]; then
    echo "📦 Initialisation de Git..."
    git init
fi

# Build du projet
echo "🔨 Build du projet..."
npm run build

# Créer une branche orphan pour le déploiement
echo "📤 Préparation du déploiement..."
git checkout --orphan gh-pages-temp 2>/dev/null || git checkout gh-pages-temp

# Ajouter seulement le dossier dist
git add -f dist/
git commit -m "Deploy to GitHub Pages - $(date)"

# Pousser sur gh-pages
echo "☁️  Push vers GitHub..."
git push origin gh-pages-temp:gh-pages --force

# Retourner sur la branche principale
git checkout - 2>/dev/null || git checkout main 2>/dev/null || git checkout master 2>/dev/null

# Supprimer la branche temporaire
git branch -D gh-pages-temp 2>/dev/null

echo "✅ Déployé avec succès!"
echo "🌐 Votre site est disponible sur: https://bubakr05.github.io"
