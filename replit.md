# replit.md

## Overview

This is a Windows XP-themed personal portfolio website built with React that replicates the nostalgic desktop environment experience. The application features a boot-up sequence, draggable windows, a taskbar, start menu navigation, and classic XP styling. It's designed as a fun, interactive way to showcase personal information, work experience, projects, and skills.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern React SPA (Single Page Application) architecture with the following key components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: TailwindCSS with custom Windows XP theme variables
- **State Management**: Zustand for window management state
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Icons**: Lucide React for modern icons, emoji for XP-style application icons

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Architecture**: RESTful API structure (currently minimal implementation)
- **Database**: Drizzle ORM configured for PostgreSQL with Neon Database
- **Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: Express sessions with PostgreSQL store capability

## Key Components

### Desktop Environment Components
1. **BootScreen**: Simulates Windows XP startup with loading animation and sound
2. **XPDesktop**: Main desktop container with wallpaper and layout management
3. **Taskbar**: Bottom taskbar with Start button, running applications, and system clock
4. **StartMenu**: Classic XP start menu for navigation between portfolio sections
5. **XPWindow**: Draggable, resizable windows with XP-style chrome and controls
6. **DesktopIcons**: Desktop shortcuts for quick access to portfolio sections

### Portfolio Content Pages
1. **About**: Personal information, education, and contact details
2. **Experience**: Work experience with detailed descriptions and achievements
3. **Projects**: Showcase of personal and professional projects
4. **Skills**: Technical skills organized by categories
5. **Contact**: Contact form with toast notifications

### Utility Components
- **useDraggable**: Custom hook for window dragging functionality
- **useWindowStore**: Zustand store for managing window states (open, closed, minimized, focused)
- **Toast System**: User feedback for form submissions and interactions

## Data Flow

### Window Management Flow
1. User interactions (double-click icons, start menu clicks) trigger window creation
2. Window store manages all window states including position, size, and z-index
3. Each window renders appropriate content component based on window type
4. Taskbar reflects current window states and provides window controls

### User Interaction Flow
1. Boot sequence plays on initial load (4-second delay)
2. Desktop loads with icons and taskbar
3. Start menu provides navigation to different portfolio sections
4. Windows can be dragged, minimized, maximized, and closed
5. Taskbar shows active windows and allows window switching

### Data Persistence
- Window positions and states are maintained in memory during session
- No persistent storage currently implemented for user preferences
- Contact form submissions trigger toast notifications (no backend persistence yet)

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query for future API calls
- **Build Tools**: Vite, TypeScript, ESBuild for production builds
- **Styling**: TailwindCSS, PostCSS, Autoprefixer
- **UI Library**: Radix UI primitives, shadcn/ui components
- **State Management**: Zustand for client-side state
- **Icons**: Lucide React, emoji for visual elements

### Backend Dependencies
- **Express.js**: Web server framework
- **Drizzle ORM**: Database ORM with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database
- **Session Management**: Express sessions with PostgreSQL store

### Development Dependencies
- **TypeScript**: Static type checking
- **Vite Plugins**: React plugin, error overlay, development tools
- **Replit Integration**: Development banner and cartographer tools

## Deployment Strategy

### Development Environment
- Vite development server with HMR (Hot Module Replacement)
- Express server runs on separate process serving API routes
- Development build uses `/api` prefix for backend routes
- Replit-specific development tools integrated

### Production Build
- Vite builds optimized React application to `dist/public`
- ESBuild bundles Express server to `dist/index.js`
- Static files served by Express in production
- Single deployment artifact with embedded web server

### Database Strategy
- Drizzle ORM configured for PostgreSQL with migrations
- Environment variable `DATABASE_URL` required for database connection
- Current implementation uses in-memory storage as fallback
- Database schema defined in `shared/schema.ts` for type safety

### Asset Management
- Static assets served from `attached_assets` directory
- Windows XP startup sound expected at `/startup.wav`
- Background image loaded from external URL (Unsplash)
- All UI assets handled through TailwindCSS and component styling

The application is designed to be easily deployable on platforms like Replit, Vercel, or traditional hosting with minimal configuration requirements.