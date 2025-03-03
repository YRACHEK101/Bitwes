

# Bitwes - Un Blog Économique  

<img width="1217" alt="Image" src="https://github.com/user-attachments/assets/1c17d9aa-5ad3-4835-8dc4-47f362f32ec0" />  
<img width="554" alt="Image" src="https://github.com/user-attachments/assets/d8d12c28-9fae-42b9-b88e-a6df3ff6058d" />  
<img width="353" alt="Image" src="https://github.com/user-attachments/assets/ec0294b3-210d-4861-8144-122294ebb348" />  

Un blog économique moderne construit avec la stack MERN, offrant un design réactif, un rendu dynamique du contenu et des tests complets.  

## 🚀 Démo en ligne  

[Visitez Bitwes](https://bitwes.vercel.app/)  

## 📋 Fonctionnalités  

- Adaptation fidèle aux designs Figma  
- Page d'erreur 404 conçue et développée sur mesure  
- Rendu dynamique des podcasts, articles et données des auteurs  
- Filtrage dynamique des articles du magazine selon les catégories  
- Données JSON pour les articles, podcasts et auteurs (émulation des endpoints API)  
- React Suspense pour les états de chargement de l'interface utilisateur  
- Composants Serveur React (pages avec routeur d'application)  
- TypeScript pour la sécurité des types  
- API Context de React pour la gestion globale de l'état  
- Hooks personnalisés pour les appels au store des podcasts et articles  
- Animations GSAP pour le texte défilant horizontalement  
- Shadcn pour des composants accessibles  
- Tailwind CSS pour une conception mobile-first réactive  
- Tests E2E sur plusieurs navigateurs avec Playwright  
- Husky pour exécuter le linting et les tests avant chaque commit Git  
- Formulaire avec validation via React Hook Form et Zod  
- Actions Serveur et gestion des erreurs avec les API routes de Next.js pour la validation côté serveur  

![Capture d'écran](FEATURE_SCREENSHOT_URL_HERE)  

## 🛠️ Stack Technologique  

- **Frontend** : React.js, Next.js, TypeScript, Tailwind CSS  
- **Backend** : Node.js, Express.js  
- **Base de données** : MongoDB  
- **Composants UI** : Shadcn UI  
- **Animations** : GSAP  
- **Tests** : Playwright  
- **Validation des formulaires** : Zod  
- **Autres** : Composants Serveur React, React Suspense  

## 📦 Versions des Packages  

- Next.js : v14.x  
- React : v18.x  
- TypeScript : v5.x  
- Tailwind CSS : v3.x  
- Shadcn UI : dernière version  
- GSAP : dernière version  
- Playwright : dernière version  
- Zod : dernière version  

## 🧰 Prérequis pour la Personnalisation  

Pour modifier ce modèle, vous devez avoir des connaissances en :  
- ✔ Next.js  
- ✔ React.js  
- ✔ Tailwind CSS  
- ✔ TypeScript  
- ✔ Composants Serveur React  
- ✔ Shadcn UI  

## 📂 Structure du Projet  

```
bitwes/
├── app/                    # Répertoire du routeur d'application Next.js
│   ├── articles/          # Pages des articles
│   ├── authors/           # Pages des auteurs
│   ├── magazine/          # Pages du magazine
│   ├── not-found/        # Page 404
│   └── podcasts/         # Pages des podcasts
├── components/            # Composants React
│   ├── shared/           # Composants partagés/généraux
│   └── ui/               # Composants UI
├── data/                  # Couche de données
│   ├── articles/         # Données des articles
│   ├── authors/          # Données des auteurs  
│   ├── constants/        # Constantes et configuration  
│   └── podcasts/         # Données des podcasts  
├── e2e/                  # Tests end-to-end  
├── hooks/                # Hooks React personnalisés  
├── json/                 # Fichiers de données JSON  
├── lib/                  # Fonctions utilitaires  
├── public/              # Ressources statiques  
```  

## 🚀 Démarrage Rapide  

### 1. Prérequis  
Assurez-vous d'avoir la dernière version stable de Node.js :  
- ✅ Node.js 18+  
- ✅ npm 9+  

### 2. Installation  
Accédez au dossier du projet et installez les dépendances :  

```bash
cd bitwes
npm install
```  

### 3. Lancement du projet  
Après l'installation, démarrez le serveur de développement :  

```bash
npm run dev
```  



## 🏗️ Build & Déploiement  

Exécutez la commande suivante pour générer le build :  

```bash
npm run build
```  

Pour tester avant le déploiement :  

```bash
npm run test
```  

🎉 Votre site est prêt à être déployé !  

## ⚙️ Configuration du Projet  

- **Couleurs** : Modifiez les couleurs dans `tailwind.config.js`  
- **Typographie** : Personnalisez les polices dans `src/app/layout.tsx`  
- **Contenu** : Modifiez les fichiers JSON dans le répertoire `data` pour ajuster les articles, podcasts et auteurs  

## 🌐 Hébergement  

Le modèle est hébergé sur Vercel, offrant :  
- ✅ Déploiements automatiques depuis Git  
- ✅ Aperçus des pull requests  
- ✅ Analytique des performances  
- ✅ Prise en charge des Edge Functions et Middleware  
- ✅ Aucune configuration requise  

## ⚡ Performances  

<img width="879" alt="Image" src="https://github.com/user-attachments/assets/0d812686-225c-4df9-9e11-13b4495fc8da" />  
<img width="871" alt="Image" src="https://github.com/user-attachments/assets/959275ea-aa19-4be2-bc9b-c068470c3793" />  

Le projet est optimisé pour :  
- Des temps de chargement rapides  
- Une structure SEO-friendly  
- Une conformité aux normes d'accessibilité  
- Un design réactif mobile-first  

