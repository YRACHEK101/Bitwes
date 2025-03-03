# Bitwes - An Economic Blog



A modern economic blog built with the MERN stack, featuring responsive design, dynamic content rendering, and comprehensive testing.

## 🚀 Live Demo

[Visit Bitwes](https://bitwes.vercel.app/)

## 📋 Features

- Faithful adaptation to Figma designs
- Custom designed and developed 404 error page
- Dynamic rendering of podcast, article and author data
- Dynamic filtering of magazine articles based on categories
- JSON data for articles, podcasts and authors (emulating API endpoints)
- React Suspense for UI loading states 
- React Server Components (app router pages)
- TypeScript for type safety
- React Context API for global state management
- Custom hooks for podcast and article context store calls
- GSAP animations for horizontal sliding text
- Shadcn for accessible components
- Tailwind CSS for mobile-first responsiveness
- E2E testing across multiple browsers using Playwright
- Husky to run lint and testing prior to Git Commit
- React Hook form with Zod Schema validation for email subscription input
- Server Actions and Error handling using Next.js API routes for server-side validation

![Feature Screenshot](FEATURE_SCREENSHOT_URL_HERE)

## 🛠️ Tech Stack

- **Frontend**: React.js, Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **UI Components**: Shadcn UI
- **Animation**: GSAP
- **Testing**: Playwright
- **Form Validation**: Zod
- **Other**: React Server Components, React Suspense

## 📦 Package Versions

- Next.js: v14.x
- React: v18.x
- TypeScript: v5.x
- Tailwind CSS: v3.x
- Shadcn UI: latest
- GSAP: latest
- Playwright: latest
- Zod: latest

## 🧰 Prerequisites for Customization

To modify this template, you should have knowledge of:
- ✔ Next.js
- ✔ React.js
- ✔ Tailwind CSS
- ✔ TypeScript
- ✔ React Server Components
- ✔ Shadcn UI

## 📂 Project Structure

```
bitwes/
├── app/                    # Next.js app router directory
│   ├── articles/          # Article pages
│   ├── authors/           # Author pages
│   ├── magazine/          # Magazine pages
│   ├── not-found/        # 404 page
│   └── podcasts/         # Podcast pages
├── components/            # React components
│   ├── shared/           # Shared/common components
│   └── ui/               # UI components
├── data/                  # Data layer
│   ├── articles/         # Article data
│   ├── authors/          # Author data 
│   ├── constants/        # Constants and config
│   └── podcasts/         # Podcast data
├── e2e/                  # End-to-end tests
├── hooks/                # Custom React hooks
├── json/                 # JSON data files
├── lib/                  # Utility functions
├── public/              # Static assets
```



## 🚀 Quick Start

### 1. Prerequisites
Make sure you have the latest stable version of Node.js:
- ✅ Node.js 18+
- ✅ npm 9+

### 2. Installation
Navigate to the project folder and install dependencies:

```bash
cd bitwes
npm install
```

### 3. Launch the project
After installation, start the development server:

```bash
npm run dev
```

💻 Your application will be accessible at: http://localhost:3000

![App Screenshot](APP_SCREENSHOT_URL_HERE)

## 🏗️ Build & Deployment

Run the following command to generate the build:

```bash
npm run build
```

To run tests before deployment:

```bash
npm run test
```

🎉 Your site is ready to be deployed!

## ⚙️ Project Configuration

- **Colors**: Modify colors in tailwind.config.js
- **Typography**: Customize fonts in src/app/layout.tsx
- **Content**: Edit JSON data files in the data directory to modify articles, podcasts and authors

## 🌐 Hosting

The template is hosted on Vercel, offering:
- ✅ Automatic deployments from Git
- ✅ Pull request previews
- ✅ Performance analytics
- ✅ Edge Functions and Middleware support
- ✅ No configuration required

## ⚡ Performance
<<img width="879" alt="Image" src="https://github.com/user-attachments/assets/0d812686-225c-4df9-9e11-13b4495fc8da" />
<img width="871" alt="Image" src="https://github.com/user-attachments/assets/959275ea-aa19-4be2-bc9b-c068470c3793" />

The project is optimized for:
- Fast load times
- SEO-friendly structure
- Accessibility compliance
- Mobile-first responsive design



## 📝 License

[License Information Here]

## 👨‍💻 Contributing

[Contribution Guidelines Here]

---


