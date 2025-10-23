# 💼 Justin David - Portfolio Website

✨ A modern, responsive portfolio website showcasing my work as an Analytics Engineer. Built with React, TypeScript, and a focus on smooth animations and user experience.

## 🌐 Live Site

[🚀 View Portfolio](https://justindavid.github.io/my-portolio/)

## ✨ Features

- **🎯 Smooth Scroll Navigation** - Seamless single-page navigation between sections
- **📱 Responsive Design** - Optimized for all device sizes
- **🎨 Modern UI** - Glassmorphism effects and smooth animations
- **🌙 Dark Theme** - Eye-friendly dark color scheme with cyan and purple accents
- **🎭 Interactive Sections**:
  - 🦸 Hero landing with call-to-action
  - 👋 About section with personal introduction
  - 💼 Professional experience timeline
  - 🚀 Project showcase
  - 🛠️ Technical skills overview
  - 📬 Contact information

## 🛠️ Tech Stack

- **⚛️ Framework**: React 18 with TypeScript
- **⚡ Build Tool**: Vite with SWC for fast compilation
- **🎨 Styling**: Tailwind CSS with custom design system
- **🧩 UI Components**: shadcn/ui (Radix UI primitives)
- **🧭 Routing**: React Router
- **🔄 Data Fetching**: TanStack Query

## 🚀 Getting Started

### 📋 Prerequisites

- 📦 Node.js (v18 or higher recommended)
- 📦 npm or yarn

### 💻 Installation

```bash
# Clone the repository
git clone https://github.com/justindavid/slick-justin-glow.git

# Navigate to project directory
cd slick-justin-glow

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:8080` 🎉

### 📜 Available Scripts

```bash
# 🔥 Development server
npm run dev

# 📦 Build for production
npm run build

# 👀 Preview production build
npm run preview

# 🔍 Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # ⚛️ React components
│   ├── ui/             # 🧩 shadcn/ui components
│   ├── Hero.tsx        # 🦸 Landing section
│   ├── About.tsx       # 👋 About section
│   ├── Experience.tsx  # 💼 Professional experience
│   ├── Projects.tsx    # 🚀 Project showcase
│   ├── Skills.tsx      # 🛠️ Technical skills
│   ├── Contact.tsx     # 📬 Contact information
│   └── Navigation.tsx  # 🧭 Header navigation
├── pages/              # 📄 Route pages
│   └── Index.tsx       # 🏠 Main portfolio page
├── lib/                # 🔧 Utilities
│   └── utils.ts        # 🛠️ Helper functions
├── index.css           # 🎨 Global styles & design system
├── App.tsx             # ⚙️ App configuration
└── main.tsx            # 🚪 Entry point
```

## 🎨 Design System

The design system is defined in `src/index.css` using CSS variables:

- **🎨 Color Palette**: HSL-based dark theme
- **🔵 Primary**: Cyan blue (`hsl(199 89% 48%)`)
- **🟣 Accent**: Purple (`hsl(282 83% 58%)`)
- **✨ Custom Utilities**:
  - `.gradient-text` - Multi-color gradient text
  - `.glass` - Glassmorphism backdrop effect
  - Animation utilities for smooth transitions

## 🚢 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The workflow is triggered on every push to the `main` branch. 🔄

### 🔧 Manual Deployment

```bash
# Build for production
npm run build

# The dist/ folder contains the production build 📦
```

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to open an issue if you spot any bugs or have ideas for improvements. 💡

## 📞 Contact

**Justin David** - Analytics Engineer 📊

- 🐙 GitHub: [@justindavid](https://github.com/justindavid)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/justindavid)
