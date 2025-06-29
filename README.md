# TheBrayem - Nigerian Property Listing Platform

## Overview

TheBrayem is a comprehensive property listing platform designed to combat rental fraud in the Nigerian real estate market through verified agents and approved listings.

## Features

- **Verified Agent System**: Mandatory agent verification before property publishing
- **Property Approval Workflow**: Admin-reviewed listings for authenticity
- **Comprehensive Search**: Advanced filtering by location, price, and property type
- **User Dashboard**: Save favorite properties and manage preferences
- **Agent Dashboard**: Property management and analytics for real estate professionals
- **Admin Panel**: Complete platform management and moderation tools

## Technology Stack

- **Frontend**: React 18.3.1 + TypeScript 5.5.3
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS 3.4.11 + shadcn/ui
- **Routing**: React Router DOM 6.26.2
- **State Management**: TanStack React Query 5.56.2
- **Forms**: React Hook Form 7.53.0 + Zod validation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Bun or npm package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd THE-BRAYEM-main

# Install dependencies
bun install
# or
npm install

# Start development server
bun run dev
# or
npm run dev
```

Visit `http://localhost:5173` to view the application.

## Authentication (Mock)

For development/demo purposes, use these credentials:

- **User**: `user` / `userpassword` → User Dashboard
- **Agent/Landlord**: `landlord` / `landlord` → Agent Dashboard
- **Admin**: `admin` / `adminpassword` → Admin Panel

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   └── [custom]/       # Business-specific components
├── pages/              # Route page components
├── hooks/              # Custom React hooks
└── lib/                # Utilities and helpers
```

## Available Routes

- `/` - Homepage
- `/listings` - All properties
- `/agents` - Agent directory
- `/contact` - Contact form
- `/login` - Authentication
- `/signup` - User registration
- `/dashboard` - User dashboard
- `/agent/dashboard` - Agent dashboard
- `/agent/add-property` - Property upload
- `/agent/verification` - Agent verification
- `/admin/dashboard` - Admin panel

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

The application can be deployed to any modern hosting platform that supports Node.js applications:

### Build for Production

```bash
bun run build
# or
npm run build
```

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **Railway**: Deploy directly from GitHub
- **DigitalOcean**: App Platform with automatic deployments

### Environment Variables

For production deployment, ensure to set up the following environment variables:
- Database connection strings
- Authentication secrets
- File upload configurations
- API keys for external services

## Support

For support and questions, please contact the development team or create an issue in the repository.
