# Project Setup Verification Guide

This document provides instructions for verifying that all project setup components are working correctly after installing dependencies.

## Prerequisites Check

Before running verification commands, ensure you have:
- ✅ Node.js v18 or later installed (`node --version`)
- ✅ npm or yarn package manager available
- ✅ Git installed and configured

## Installation

```bash
# Install all dependencies
npm install
# or
yarn install
```

## Verification Steps

### 1. TypeScript Configuration
```bash
# Run type checking - should complete without errors
npm run typecheck
```

**Expected Result:** No TypeScript errors. The command should exit with code 0.

### 2. ESLint
```bash
# Run linter
npm run lint
```

**Expected Result:** Linting passes with no errors. May show warnings for unused variables or console statements in example code.

```bash
# Auto-fix linting issues
npm run lint:fix
```

### 3. Prettier Formatting
```bash
# Check if files are formatted correctly
npm run format:check
```

**Expected Result:** All files should be properly formatted.

```bash
# Format all files
npm run format
```

### 4. Jest Testing
```bash
# Run all tests
npm test
```

**Expected Result:** All tests pass (4 test suites in App.test.tsx should pass).

```bash
# Run tests with coverage
npm run test:coverage
```

**Expected Result:** Coverage report generated in `/coverage` directory.

### 5. Development Server
```bash
# Start Expo development server
npm start
```

**Expected Result:** 
- Metro bundler starts successfully
- QR code displayed for mobile testing
- Can press 'w' to open in browser, 'i' for iOS, 'a' for Android

### 6. Environment Configuration
```bash
# Verify .env file exists
cat .env  # Unix/Mac
type .env # Windows
```

**Expected Result:** Environment file should contain all required Firebase and BigQuery configuration keys (can be placeholders for now).

## Common Issues and Solutions

### Issue: "Cannot find module 'expo'"
**Solution:** Dependencies not installed. Run `npm install` or `yarn install`.

### Issue: TypeScript errors about missing types
**Solution:** Ensure all `@types/*` packages are installed. Check `package.json` devDependencies.

### Issue: ESLint errors
**Solution:** Run `npm run lint:fix` to auto-fix issues, or manually address remaining problems.

### Issue: Prettier formatting conflicts
**Solution:** Run `npm run format` to format all files according to project standards.

### Issue: Tests failing
**Solution:** 
1. Check jest.setup.js is properly configured
2. Verify all testing dependencies are installed
3. Run `npm test -- --clearCache` to clear Jest cache

## File Checklist

After setup, verify these files exist:

- [x] `package.json` - Dependencies and scripts
- [x] `tsconfig.json` - TypeScript configuration
- [x] `.eslintrc.js` - ESLint rules
- [x] `.prettierrc` - Prettier formatting rules
- [x] `jest.config.js` - Jest testing configuration
- [x] `jest.setup.js` - Jest setup file
- [x] `babel.config.js` - Babel configuration with path aliases
- [x] `app.config.js` - Expo configuration
- [x] `.env.example` - Environment template
- [x] `.gitignore` - Git ignore patterns
- [x] `App.tsx` - Main application component
- [x] `__tests__/App.test.tsx` - Sample test file
- [x] `README.md` - Updated with setup instructions

## Success Criteria

All setup is complete when:

1. ✅ `npm run typecheck` passes without errors
2. ✅ `npm run lint` passes without errors
3. ✅ `npm run format:check` confirms all files are formatted
4. ✅ `npm test` runs successfully with all tests passing
5. ✅ `npm start` launches the Expo development server
6. ✅ All configuration files are present and valid

## Next Steps

Once verification is complete:

1. Create a `.env` file based on `.env.example`
2. Add your Firebase credentials
3. Start developing features according to `/docs/PROJECT_OVERVIEW_LA_TORTUGA.md`
4. Follow the development guidelines in the main README

## Support

If you encounter issues during setup:
- Check the main README for troubleshooting tips
- Review `/docs/AI_ONBOARDING.md` for project context
- Ensure all prerequisites are properly installed
