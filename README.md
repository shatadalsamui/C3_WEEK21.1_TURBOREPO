# TurboRepo Monorepo Project

This is a monorepo project using Turborepo for managing multiple applications and packages with optimized builds.

## Current Structure

### Apps
- `docs`: Documentation site using Next.js
- `web`: Main web application using Next.js

### Packages
- `@repo/ui`: Shared React component library
- `@repo/eslint-config`: Shared ESLint configurations
- `@repo/typescript-config`: Shared TypeScript configurations

## Development Setup

### Prerequisites
- Node.js >= 18
- Yarn (v1.22.22)

### Installation
```bash
yarn install
```

### Common Commands

- Start all apps in development mode:
  ```bash
  yarn dev
  ```

- Build all packages and apps:
  ```bash
  yarn build
  ```

- Run linting across all packages:
  ```bash
  yarn lint
  ```

- Run type checking:
  ```bash
  yarn check-types
  ```

## Configuration

The monorepo is configured with:

- **Turborepo** for task orchestration (see `turbo.json`)
- **Yarn Workspaces** for package management
- **TypeScript** for type safety
- **Prettier** for code formatting

## Adding New Packages

1. Create a new directory in `packages/` or `apps/`
2. Add a `package.json` with the appropriate configuration
3. Run `yarn` from the root to link dependencies

## Deployment

Each app can be deployed independently. The build artifacts are stored in:
- Next.js apps: `.next/` directory
- Other packages: `dist/` directory

For more information about Turborepo, see the [official documentation](https://turbo.build/repo)
