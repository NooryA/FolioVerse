# 🤝 Contributing to FolioVerse

Thank you for your interest in contributing to FolioVerse! This document provides guidelines and information for contributors.

## 🌟 Ways to Contribute

### 1. **Create New Themes**

- Design and develop new portfolio themes
- Follow our design and technical standards
- Add comprehensive documentation

### 2. **Improve Existing Themes**

- Fix bugs and issues
- Add new features or components
- Improve performance and accessibility
- Update documentation

### 3. **Documentation**

- Improve README files
- Add code comments
- Create tutorials and guides
- Update theme descriptions

### 4. **Bug Reports & Feature Requests**

- Report bugs with detailed reproduction steps
- Suggest new features or improvements
- Provide feedback on existing themes

## 🚀 Getting Started

### Development Setup

1. **Fork the repository**

```bash
git clone https://github.com/yourusername/folioverse.git
cd folioverse
```

2. **Install dependencies for all themes**

```bash
./install-all-themes.ps1
```

3. **Create a development branch**

```bash
git checkout -b feature/your-feature-name
```

### Environment Requirements

- **Node.js 18+**
- **npm or yarn**
- **Git**
- **Code editor** (VS Code recommended)

## 📋 Theme Development Guidelines

### Theme Structure

Every theme must follow this structure:

```
theme-name/
├── app/
│   ├── globals.css          # Theme-specific styles
│   ├── layout.tsx           # App layout
│   └── page.tsx             # Main page
├── components/
│   ├── hero-section.tsx     # Hero/landing section
│   ├── about-section.tsx    # About section
│   ├── projects-section.tsx # Projects/work section
│   ├── contact-section.tsx  # Contact section
│   ├── navigation.tsx       # Navigation component
│   └── [additional-components].tsx
├── public/                  # Static assets (if needed)
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Theme-specific documentation
```

### Naming Conventions

- **Theme folders**: `[theme-name]-theme` (e.g., `minimalist-theme`)
- **Components**: PascalCase (e.g., `HeroSection`)
- **Files**: kebab-case (e.g., `hero-section.tsx`)
- **CSS classes**: Follow Tailwind conventions

### Required Components

Every theme must include:

1. **HeroSection** - Main landing/introduction area
2. **AboutSection** - About the person/company
3. **ProjectsSection** - Work/projects showcase
4. **ContactSection** - Contact information and form
5. **Navigation** - Site navigation menu

### Technical Requirements

#### Dependencies

Use the standard tech stack:

```json
{
  "dependencies": {
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.16",
    "lucide-react": "^0.303.0",
    "next-themes": "^0.2.1",
    "tailwind-merge": "^2.2.0",
    "clsx": "^2.0.0"
  }
}
```

#### TypeScript

- All components must be TypeScript
- Include proper type definitions
- Use interfaces for props
- No `any` types without justification

#### Responsive Design

- Mobile-first approach
- Test on multiple screen sizes
- Use Tailwind responsive classes
- Consider touch interactions

#### Performance

- Optimize images and assets
- Minimize bundle size
- Use lazy loading where appropriate
- Implement proper SEO practices

#### Accessibility

- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Test with screen readers

### Code Quality Standards

#### Code Style

- Use Prettier for formatting
- Follow ESLint rules
- Consistent indentation (2 spaces)
- Clear, descriptive variable names

#### Component Structure

```tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <section className="min-h-screen flex items-center justify-center">{/* Component content */}</section>;
}
```

#### CSS/Styling

- Use Tailwind CSS primarily
- Custom CSS in `globals.css` for theme-specific styles
- CSS variables for theme colors
- Consistent animation timing

## 📝 Documentation Requirements

### Theme README

Each theme must include a README.md with:

```markdown
# Theme Name

## Description

Brief description of the theme's design philosophy and target audience.

## Features

- Key features and capabilities
- Design elements and animations
- Unique selling points

## Installation

Step-by-step installation instructions

## Customization

How to customize colors, fonts, and layout

## Demo

Link to live demo or screenshots

## Credits

Any inspiration sources or third-party assets
```

### Code Comments

- Document complex functions and logic
- Explain design decisions
- Include usage examples for components

## 🔧 Development Process

### Branch Naming

- `feature/theme-name` - New themes
- `feature/component-name` - New components
- `fix/issue-description` - Bug fixes
- `docs/section-name` - Documentation updates

### Commit Messages

Follow conventional commits:

```
feat: add glassmorphism theme
fix: resolve mobile navigation issue
docs: update installation guide
style: improve button hover animations
```

### Testing

Before submitting:

1. **Visual Testing**

   - Test on multiple browsers
   - Verify mobile responsiveness
   - Check animations and interactions

2. **Code Testing**

   - Run `npm run lint`
   - Check TypeScript errors
   - Verify build process

3. **Performance Testing**
   - Check Lighthouse scores
   - Test loading times
   - Verify smooth animations

## 🚀 Submission Process

### Pull Request Guidelines

1. **Create detailed PR description**

   - Explain what changes were made
   - Include screenshots/GIFs
   - Reference any related issues

2. **PR Title Format**

   ```
   [Theme/Fix/Docs]: Brief description
   ```

3. **Include in PR**
   - Screenshots of the theme
   - Mobile screenshots
   - Demo link (if possible)

### Review Process

1. **Automated Checks**

   - Build verification
   - Code quality checks
   - TypeScript validation

2. **Manual Review**

   - Code review by maintainers
   - Design consistency check
   - Performance evaluation

3. **Feedback Integration**
   - Address reviewer comments
   - Make requested changes
   - Update documentation

## 🎨 Design Guidelines

### Color Schemes

- Define clear color palettes
- Use CSS custom properties
- Ensure accessibility standards
- Consider dark/light mode support

### Typography

- Choose appropriate font pairings
- Define clear hierarchy
- Ensure readability
- Consider performance impact

### Animation Principles

- Smooth, purposeful animations
- Respect user preferences (reduce motion)
- Consistent timing functions
- Performance-optimized

### Layout Principles

- Clear visual hierarchy
- Consistent spacing
- Responsive behavior
- User-friendly navigation

## 🐛 Bug Reports

### Report Format

```markdown
**Bug Description**
Clear description of the issue

**Steps to Reproduce**

1. Go to...
2. Click on...
3. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Screenshots**
If applicable

**Environment**

- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 90]
- Theme: [e.g., minimalist-theme]
```

## 💡 Feature Requests

### Request Format

```markdown
**Feature Description**
Clear description of the proposed feature

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should this be implemented?

**Additional Context**
Any other relevant information
```

## 🏆 Recognition

### Contributors

Contributors are recognized through:

- GitHub contributors page
- Credits in theme READMEs
- Annual contributor highlights
- Community shoutouts

### Theme Authors

Theme creators receive:

- Attribution in theme documentation
- Feature in project showcase
- Social media recognition
- Portfolio linking opportunities

## 📞 Getting Help

### Communication Channels

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - General questions and ideas
- **Discord** - Real-time chat with community
- **Email** - Direct contact with maintainers

### Response Times

- **Issues**: 24-48 hours
- **Pull Requests**: 3-5 days
- **Discussions**: 1-2 days
- **Security Issues**: 12-24 hours

## 📜 Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Standards

**Positive behaviors include:**

- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behaviors include:**

- Trolling, insulting, or derogatory comments
- Public or private harassment
- Publishing others' private information
- Other conduct which could reasonably be considered inappropriate

### Enforcement

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned with this Code of Conduct.

---

## 🙏 Thank You

Thank you for considering contributing to FolioVerse! Your contributions help make this project better for everyone. Whether you're fixing a typo, adding a new theme, or improving documentation, every contribution is valuable.

**Happy coding!** 🚀

---

_For questions about contributing, please open an issue or contact the maintainers directly._
