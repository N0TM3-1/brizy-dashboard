# Brizy Dashboard

A React-based single-page application built with modern web technologies, implementing a modular component architecture with state management and dynamic routing.

## 🏗️ Architecture

### Component Structure

- **Functional Components**: Built using React hooks (`useState`) for state management
- **Conditional Rendering**: Dynamic content switching using switch statements
- **Prop Drilling**: State and setter functions passed through component hierarchy
- **Modular Design**: Each feature isolated in separate component files

### State Management

- **Local State**: Uses `useState` hook for active section tracking
- **Lift State Up**: Parent `Dashboard` component manages navigation state
- **State Synchronization**: Sidebar and main content stay in sync via shared state

### Routing Strategy

- **Client-Side Navigation**: Custom implementation without external routing library
- **Component Mapping**: Object-based component resolution in `renderContent()` function
- **Fallback Handling**: Default case returns to dashboard overview

### Code Organization

#### Core Components

- `Dashboard.jsx` - Root container with state management and content switching
- `Sidebar.jsx` - Navigation component with menu item mapping and active state styling
- Feature components implementing consistent layout patterns

#### Data Structures

```javascript
// Menu configuration object
const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: "🏠" },
  // ... additional items
];

// State management pattern
const [activeSection, setActiveSection] = useState("dashboard");
```

#### Styling Architecture

- **Utility-First CSS**: Tailwind classes for rapid development
- **Conditional Styling**: Dynamic class application based on component state
- **Design System**: Consistent color palette (gray-800/900 theme)
- **Responsive Grid**: CSS Grid and Flexbox for layout management

## 🛠️ Tech Stack & Dependencies

- **React**: 19.1.0 - Component-based UI library with hooks
- **Vite**: 6.3.5 - Build tool with HMR and ES modules
- **Tailwind CSS**: 4.1.11 - Utility-first CSS framework with Vite plugin
- **ESLint**: 9.25.0 - Code linting with React-specific rules
- **Development Tools**: React DevTools plugins and globals configuration

## 📦 Development Setup

### Prerequisites

- Node.js (compatible with React 19.1.0)
- npm or yarn package manager

### Installation & Build Process

```bash
# Clone and navigate
git clone <repository-url>
cd brizy-dashboard

# Install dependencies
npm install

# Development server with HMR
npm run dev

# Production build with optimization
npm run build

# Preview production build locally
npm run preview
```

### Build Configuration

- **Vite Config**: Custom path aliases (`@/` → `./src/`)
- **ESLint Config**: React hooks, refresh plugins, and custom rules
- **Tailwind Integration**: Vite plugin for JIT compilation

## 🧞 NPM Scripts

```json
{
  "dev": "vite", // Development server with HMR
  "build": "vite build", // Production build with optimization
  "lint": "eslint .", // Code linting across all files
  "preview": "vite preview" // Preview production build
}
```

## 🗂️ File Structure & Module Organization

```
src/
├── components/           # React functional components
│   ├── Dashboard.jsx     # Main container with state management
│   ├── Sidebar.jsx       # Navigation with conditional styling
│   ├── DashboardOverview.jsx  # Grid layouts and stats cards
│   ├── WebsiteManagement.jsx  # Form components and media grids
│   ├── DomainHosting.jsx      # Progress bars and status indicators
│   ├── BlogCMS.jsx           # Table layouts and action buttons
│   ├── SEOMarketing.jsx      # Integration cards and metrics
│   └── Settings.jsx          # Complex forms and user management
├── App.jsx              # Root component with import resolution
├── main.jsx            # React DOM rendering and StrictMode
├── index.css           # Tailwind CSS imports
└── assets/             # Static resources
```

## ⚙️ Configuration Files

### Vite Configuration (`vite.config.js`)

```javascript
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
```

### ESLint Configuration (`eslint.config.js`)

- ES2020+ syntax support
- React hooks validation
- Unused variables detection
- React refresh compatibility

## 🎨 CSS Architecture & Design Patterns

### Tailwind CSS Implementation

- **Utility Classes**: Atomic CSS approach with responsive prefixes
- **Custom Color Palette**: Gray-scale theming (gray-700/800/900)
- **Layout Systems**: Flexbox and CSS Grid for responsive design
- **Component Styling**: Consistent class patterns across components

### Responsive Design Patterns

```css
/* Grid layouts with breakpoints */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Conditional styling based on state */
className={`base-classes ${condition ? 'active-classes' : 'inactive-classes'}`}
```

### State-Driven Styling

- Active navigation states with border indicators
- Conditional background colors based on data status
- Hover effects and transition animations
- Dynamic badge coloring system

## 🔧 Development Patterns

### Component Design Patterns

1. **Container/Presentational**: Dashboard manages state, child components render UI
2. **Composition**: Reusable card layouts and grid systems
3. **Props Interface**: Consistent prop naming and TypeScript-ready structure
4. **Event Handling**: Callback functions passed down component hierarchy

### Code Quality Tools

- **ESLint Rules**: React hooks dependency checking
- **Import Organization**: Path aliases for clean imports
- **File Naming**: Consistent PascalCase for components
- **Code Splitting**: Modular component architecture for better performance

## 🤝 Development Workflow

### Code Standards

- **Functional Components**: React hooks pattern throughout codebase
- **ES6+ Syntax**: Modern JavaScript features (destructuring, arrow functions)
- **Consistent Formatting**: ESLint enforced code style
- **Component Isolation**: Each feature in separate module files

### Development Process

1. **Hot Module Replacement**: Vite provides instant feedback during development
2. **Linting**: Pre-commit hooks recommended for code quality
3. **Build Optimization**: Vite handles code splitting and minification
4. **Path Resolution**: Absolute imports using `@/` alias

### Performance Considerations

- **Component Lazy Loading**: Potential for React.lazy() implementation
- **State Optimization**: Minimal re-renders with proper state structure
- **Bundle Size**: Modular architecture supports tree shaking
- **CSS Optimization**: Tailwind purges unused styles in production

## 📝 Technical Notes

### Browser Compatibility

- Modern ES2020+ features require recent browser versions
- React 19.1.0 compatibility requirements
- CSS Grid and Flexbox support needed

### Scalability Patterns

- **State Management**: Ready for Redux/Zustand integration if needed
- **Routing**: Architecture supports React Router implementation
- **API Integration**: Component structure prepared for data fetching
- **Testing**: Jest/React Testing Library compatible structure
