# 🌸 Neumorphic Portfolio Theme

A stunning portfolio template featuring the popular neumorphism design trend with soft UI elements, subtle shadows, and tactile interactions. Perfect for creating interfaces that feel both modern and touchable.

## 🌟 Features

- **Soft UI Elements**: Beautiful raised and inset shadow effects
- **Tactile Interactions**: Buttons that feel like physical objects
- **Subtle Color Palette**: Minimal contrast for comfortable viewing
- **Smooth Animations**: Gentle transitions that enhance the soft aesthetic
- **Dark Mode Support**: Full dark theme with appropriate shadow adjustments
- **Accessibility Focused**: Careful contrast management for readability

## 🎨 Design Philosophy

Neumorphism combines the best of skeuomorphism and flat design:

- **Soft Shadows**: Dual-directional shadows create depth without harshness
- **Minimal Contrast**: Colors stay close to background for subtle appearance
- **Raised Elements**: Convex surfaces that appear to come off the page
- **Inset Areas**: Concave surfaces that appear pressed into the interface
- **Rounded Corners**: Soft, pill-like shapes that feel organic
- **Monochromatic**: Single color family with light and dark variations

## 🚀 Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Customize your surfaces:**

- Adjust shadow intensity in `tailwind.config.js`
- Modify color palette for different moods
- Change border radius for sharper/softer appearance

## 🎯 Shadow System

### Raised Elements (Convex)

```css
/* Light mode */
shadow-neu: 9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff

/* Dark mode */
shadow-neu-dark: 9px 9px 16px #1a202c, -9px -9px 16px #4a5568
```

### Inset Elements (Concave)

```css
/* Light mode */
shadow-neu-inset: inset 9px 9px 16px #a3b1c6, inset -9px -9px 16px #ffffff

/* Dark mode */
shadow-neu-dark-inset: inset 9px 9px 16px #1a202c, inset -9px -9px 16px #4a5568
```

## 🌈 Color Palette

```css
/* Light Theme */
neu-bg: #e0e5ec          /* Background */
neu-surface: #e0e5ec     /* Card surfaces */
neu-text: #4a5568        /* Primary text */
neu-textLight: #718096   /* Secondary text */
neu-shadowDark: #a3b1c6  /* Dark shadow */
neu-shadowLight: #ffffff /* Light shadow */

/* Dark Theme */
neu-darkBg: #2d3748      /* Dark background */
neu-darkSurface: #2d3748 /* Dark surfaces */
neu-darkText: #e2e8f0    /* Dark mode text */
neu-darkShadowDark: #1a202c   /* Dark shadow */
neu-darkShadowLight: #4a5568  /* Light shadow */
```

## 🎨 Perfect For

- **Mobile App Interfaces** - Feels natural and touchable
- **Dashboard Designs** - Soft panels that organize information
- **Creative Portfolios** - Modern aesthetic with subtle depth
- **Product Showcases** - Makes products feel tangible
- **Wellness Apps** - Calming, stress-free visual experience
- **Anyone** who wants to create comforting, approachable interfaces

## 💡 Design Tips

1. **Keep Contrast Low**: High contrast breaks the soft illusion
2. **Use Rounded Corners**: Sharp edges feel harsh in neumorphism
3. **Consistent Light Source**: All shadows should come from same direction
4. **Subtle Color Variations**: Stay within narrow color range
5. **Test Accessibility**: Ensure sufficient contrast for readability
6. **Mind the Trend**: Neumorphism works best for specific use cases

---

_"Design is not just what it looks like and feels like. Design is how it works."_ - Steve Jobs

🌸 **Create interfaces that beg to be touched** 🌸
