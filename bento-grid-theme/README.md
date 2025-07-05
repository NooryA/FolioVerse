# 🎯 Bento Grid Portfolio Theme

A modern, modular portfolio template inspired by the popular bento box layout. Perfect for showcasing content in organized, visually appealing cards that adapt beautifully to any screen size.

## 🌟 Features

- **Modular Layout**: Flexible bento grid system with various card sizes
- **Responsive Design**: Seamlessly adapts from mobile to desktop
- **Smart Cards**: Each card serves a specific purpose and tells part of your story
- **Hover Effects**: Subtle animations that bring the layout to life
- **Clean Aesthetics**: Modern design with perfect spacing and typography
- **Easy Customization**: Simple to rearrange, resize, and modify cards

## 🎨 Design Philosophy

The bento grid concept originated from Japanese bento boxes, where different foods are organized in separate compartments. This portfolio applies the same principle to web design:

- **Organization**: Each card contains focused, digestible content
- **Hierarchy**: Different card sizes establish visual importance
- **Balance**: Asymmetrical layout that feels perfectly balanced
- **Flexibility**: Easy to add, remove, or rearrange content blocks
- **Clarity**: Clean separations between different types of information

## 🚀 Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Customize your grid:**

- Modify card layouts in `hero-section.tsx`
- Adjust colors in `tailwind.config.js`
- Update content for each card component

## 📐 Grid System

### Card Sizes

- **Large (2x2)**: Main profile/hero content
- **Medium (2x1)**: Skills, projects, quotes
- **Small (1x1)**: Status, location, stats, time

### Responsive Breakpoints

```css
/* Mobile: 2 columns */
grid-cols-2

/* Tablet: 4 columns */
md:grid-cols-4

/* Desktop: 6 columns */
lg:grid-cols-6
```

## 🎨 Color Palette

The theme uses a sophisticated color system:

```css
/* Neutrals */
bento-lighter: #ffffff    /* Card backgrounds */
bento-light: #f9fafb     /* Page background */
bento-primary: #111827   /* Primary text */
bento-secondary: #374151 /* Secondary text */

/* Accent Colors */
bento-indigo: #6366f1    /* Primary actions */
bento-emerald: #10b981   /* Success/location */
bento-orange: #f59e0b    /* Status/highlights */
bento-purple: #8b5cf6    /* Creative elements */
bento-blue: #3b82f6      /* Information */
bento-pink: #ec4899      /* Social/hearts */
```

## 🔧 Card Components

### Profile Card (Large)

- Avatar with gradient background
- Name and title
- Primary call-to-action button

### Skills Card (Medium)

- Icon header with title
- Skill tags with color coding
- Clean, scannable layout

### Status Cards (Small)

- Location with map pin
- Availability indicator
- Real-time information

### Stats Card (Medium)

- Multiple metrics in grid
- Large numbers with descriptions
- Achievement highlights

### Quote Card (Medium)

- Inspirational or personal quote
- Gradient background
- Decorative icon

### Social Card (Medium)

- Connection links
- Platform buttons
- Engagement metrics

## 📱 Mobile Experience

The bento grid excels on mobile devices:

- **2-column layout** for optimal mobile viewing
- **Vertical scrolling** through organized content
- **Touch-friendly** card interactions
- **Readable typography** at all sizes
- **Optimized spacing** for thumb navigation

## ⚡ Performance

Built for speed and efficiency:

- **CSS Grid** for optimal layout performance
- **Minimal JavaScript** for core functionality
- **Optimized animations** using CSS transforms
- **Efficient hover states** with smooth transitions
- **Lazy loading** compatible structure

## 🎯 Perfect For

- **Product Designers** showcasing portfolio work
- **Developers** displaying projects and skills
- **Freelancers** presenting services and testimonials
- **Agencies** highlighting team and capabilities
- **Creatives** organizing diverse content types
- **Anyone** who values clean, organized layouts

## 🔧 Customization Guide

### Adding New Cards

```tsx
<div className="col-span-1 row-span-1 bg-bento-lighter rounded-2xl p-6 shadow-bento hover:shadow-bento-lg transition-all duration-300 hover:-translate-y-1">
  {/* Your content here */}
</div>
```

### Card Size Variants

- **Small**: `col-span-1 row-span-1`
- **Wide**: `col-span-2 row-span-1`
- **Tall**: `col-span-1 row-span-2`
- **Large**: `col-span-2 row-span-2`

### Color Themes

Each card can use different background styles:

- **Default**: `bg-bento-lighter`
- **Gradient**: `bg-gradient-to-br from-color-500 to-color-600`
- **Solid**: `bg-bento-primary` (with white text)

## 🌈 Layout Variations

The theme supports multiple layout patterns:

### Traditional Bento

- Mixed card sizes
- Asymmetrical but balanced
- Visual hierarchy through size

### Uniform Grid

- All cards same size
- Perfect symmetry
- Equal visual weight

### Feature Focus

- One large hero card
- Supporting smaller cards
- Clear primary action

## 💡 Best Practices

1. **Content Strategy**: Each card should have a single, clear purpose
2. **Visual Balance**: Mix card sizes and colors thoughtfully
3. **Information Hierarchy**: Use size to indicate importance
4. **Whitespace**: Don't overcrowd the grid
5. **Mobile First**: Test on mobile devices regularly
6. **Performance**: Keep card content lightweight

## 🎨 Design Inspiration

This theme draws inspiration from:

- **Japanese bento boxes** for organization principles
- **iOS widgets** for modern card design
- **Pinterest boards** for grid layout patterns
- **Notion pages** for modular content blocks
- **Modern dashboards** for information density

---

_"Good design is as little design as possible, but organized perfectly."_

🎯 **Master the art of modular design with bento grids** 🎯
