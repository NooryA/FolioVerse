![image](https://github.com/user-attachments/assets/8ffbbf59-e077-4e57-b015-0ff9f936a289)


# 🌟 FolioVerse - Portfolio Theme Collection ( some themes are still under construction ) 

> A curated collection of stunning, modern portfolio themes built with Next.js, TypeScript, and Tailwind CSS. Each theme represents a unique design philosophy and aesthetic approach.

### 🎭 All Available Themes

<details>
<summary>Click to see all 39 themes</summary>

1. **3d-parallax-theme** - Immersive 3D parallax scrolling effects
2. **bento-grid-theme** - Modern grid-based layout inspired by Bento boxes
3. **brutalist-theme** - Raw, aggressive design with bold typography
4. **card-based-theme** - Clean card layouts with hover effects
5. **case-study-theme** - Perfect for showcasing detailed project case studies
6. **claymorphic-theme** - Soft, clay-like design elements
7. **code-editor-theme** - Developer-focused with syntax highlighting aesthetics
8. **corporate-pro-theme** - Professional business portfolio design
9. **creative-studio-theme** - Artistic and creative agency focused
10. **cypberpunk-theme** - Neon-lit futuristic design with glitch effects
11. **dark-academia-theme** - Scholarly, vintage-inspired dark aesthetic
12. **design-system-theme** - Showcases design system methodology
13. **file-explorer-theme** - OS-inspired file system navigation
14. **freelancer-services-theme** - Service-focused freelancer portfolio
15. **futuristic-dashboard-theme** - High-tech dashboard aesthetic
16. **gallery-wall-theme** - Art gallery inspired layout
17. **game-world-theme** - Gaming-inspired interactive design
18. **glassmorphism-theme** - Frosted glass effects and transparency
19. **gradient-overload-theme** - Vibrant gradient-heavy design
20. **liquid-ui-theme** - Fluid, organic animations and interactions
21. **magazine-theme** - Editorial magazine-style layout
22. **minimalist-theme** - Clean, focused minimalist design
23. **multiverse-tabs-theme** - Multi-dimensional tab navigation
24. **nature-inspired-theme** - Organic, nature-themed design
25. **neumorphic-theme** - Soft, tactile skeuomorphic design
26. **open-source-hero-theme** - Celebrates open source contribution
27. **operating-system-theme** - OS interface inspired design
28. **personal-diary-theme** - Personal, intimate diary-style layout
29. **product-showcase-theme** - Product-focused presentation
30. **resume-first-theme** - Resume and CV focused design
31. **sketchbook-theme** - Hand-drawn, sketchy aesthetic
32. **space-travel-theme** - Cosmic, space exploration themed
33. **startup-founder-theme** - Entrepreneur and startup focused
34. **storybook-theme** - Narrative-driven storytelling layout
35. **techie-dev-theme** - Technical developer portfolio
36. **time-machine-theme** - Vintage, retro-futuristic design
37. **tv-channel-theme** - Television broadcast inspired
38. **vr-metaverse-theme** - Virtual reality and metaverse aesthetic
39. **wireframe-theme** - Minimalist wireframe-style design

</details>

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn package manager
- Windows PowerShell (for the install script)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/folioverse.git
cd folioverse

# Run the automated installation script ( OR you can manually go into each theme and run npm install)
./install-all-themes.ps1
```

### 🛠️ Using the Install Script

The `install-all-themes.ps1` PowerShell script automates the installation process for all themes:

```powershell
# What the script does:
# 1. Scans for all *-theme directories
# 2. Checks for package.json in each theme
# 3. Runs npm install for each theme
# 4. Provides detailed progress feedback
# 5. Handles errors gracefully

# To run the script:
./install-all-themes.ps1
```

## 🏗️ Project Structure

```
folioverse/
├── 3d-parallax-theme/          # Individual theme folder
│   ├── app/
│   │   ├── globals.css         # Theme-specific styles
│   │   ├── layout.tsx          # App layout
│   │   └── page.tsx            # Main page
│   ├── components/
│   │   ├── hero-section.tsx    # Hero component
│   │   ├── about-section.tsx   # About component
│   │   ├── projects-section.tsx # Projects component
│   │   ├── contact-section.tsx # Contact component
│   │   └── navigation.tsx      # Navigation component
│   ├── next.config.js          # Next.js configuration
│   └── package.json            # Dependencies
├── [38 more theme folders...]
├── install-all-themes.ps1      # Automated installation script
├── LICENSE                     # MIT License
├── CONTRIBUTING.md             # Contribution guidelines
└── README.md                   # This file
```

## 🎯 Usage Guide

### Running a Theme

```bash
cd [theme-name]
npm run dev
```

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Quick Contribution Steps

1. **Fork the repository**
2. **Create a feature branch**

```bash
git checkout -b feature/new-theme-name
```

3. **Add your theme** following the existing structure
4. **Test thoroughly**
5. **Submit a pull request**

### Adding a New Theme

1. **Create theme folder** following naming convention: `[theme-name]-theme`
2. **Include standard structure:**
   ```
   new-theme/
   ├── app/
   ├── components/
   ├── package.json
   ├── next.config.js
   └── README.md
   ```
3. **Follow design principles** of your chosen aesthetic
4. **Ensure responsive design**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Showcase - COMING SOON!

### Getting Help

- **📚 Documentation** - Check individual theme READMEs
- **🐛 Issues** - Report bugs via GitHub Issues
- **📧 Email** - Contact maintainers directly

**Enjoy ❤️**
