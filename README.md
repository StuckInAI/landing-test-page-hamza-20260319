# Modern Landing Page - Next.js Fullstack Application

A modern, responsive landing page built with Next.js 14, TypeScript, Tailwind CSS, and SQLite database with TypeORM.

## Features

- **Modern Design**: Responsive landing page with Tailwind CSS
- **Fullstack Capabilities**: Contact form with SQLite database storage
- **Type Safety**: Built with TypeScript
- **Deployment Ready**: Optimized for Docker and Coolify deployment

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - The `.env` file is already configured for SQLite

3. Initialize the database:
   ```bash
   npm run typeorm migration:run
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Database Commands

- Generate migration: `npm run migration:generate -- src/lib/migrations/MigrationName`
- Run migrations: `npm run migration:run`
- Revert migration: `npm run migration:revert`

## Deployment

This application is configured for deployment on Coolify:

1. Dockerfile uses Node 20-alpine
2. All files are at repository root
3. SQLite database included
4. Environment variables configured

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - React components
- `/src/lib` - Database configuration and services
- `/public` - Static assets
- Root files - Configuration and deployment files

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- TypeORM
- SQLite
- Docker