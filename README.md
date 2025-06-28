# TurboRepo Monorepo Project

This is a monorepo project using Turborepo - a high-performance build system for JavaScript/TypeScript monorepos. Turborepo intelligently orchestrates and accelerates your builds through:

## Key Features

1. **Intelligent Caching System**
   - Automatic local caching of task outputs (builds, tests, etc.)
   - Content-aware hashing for precise cache invalidation
   - Up to 90% faster rebuilds by skipping unchanged work
   - Remote caching support for team/CI sharing (via Vercel)

2. **Build System Orchestration**
   - Parallel task execution for maximum performance
   - Incremental builds (only rebuild what changed)
   - Pipeline dependency management (via `dependsOn` in turbo.json)

3. **Package Sharing**
   - Seamless workspace package referencing (via Yarn Workspaces)
   - Automatic dependency graph management
   - Shared tooling configurations (ESLint, TypeScript, etc.)

4. **Optimized Workflows**
   - Task pipelines to define execution order
   - Zero-config support for popular frameworks
   - Built-in profiling for performance optimization

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

## Caching Mechanism

Turborepo's intelligent caching system dramatically speeds up your development workflow:

1. **Local Caching**
   - Automatic caching of task outputs (builds, tests, etc.)
   - Content-aware hashing for precise cache invalidation
   - Cache hits skip redundant work (up to 90% faster rebuilds)

2. **Remote Caching (Enterprise Feature)**
   - Share cache artifacts across your team and CI systems
   - Configurable via `turbo login` and `turbo link`
   - Supports Vercel's free remote caching service

3. **Cache Configuration**
   - Define cacheable tasks in `turbo.json`
   - Specify inputs/outputs for each task
   - Example from this repo:
     ```json
     "build": {
       "inputs": ["$TURBO_DEFAULT$", ".env*"],
       "outputs": [".next/**", "!.next/cache/**", "dist"]
     }
     ```

4. **Cache Management**
   - View cache status with `turbo run build --dry-run`
   - Clear local cache with `turbo prune`
   - Analyze cache usage with `--profile` flag

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
