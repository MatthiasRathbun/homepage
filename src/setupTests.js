// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('@tsparticles/react', () => ({
  __esModule: true,
  default: () => null,
}));

jest.mock('tsparticles', () => ({
  __esModule: true,
  loadFull: () => Promise.resolve(),
}));
