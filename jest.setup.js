// Jest setup file for additional configuration
import '@testing-library/jest-native/extend-expect';

// Mock expo modules
jest.mock('expo-sqlite', () => ({
  openDatabase: jest.fn(),
}));

jest.mock('react-native-mmkv', () => ({
  MMKV: jest.fn(),
}));

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}));

// Suppress console warnings during tests
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};
