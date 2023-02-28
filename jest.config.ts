import type {Config} from 'jest';

const config: Config = {
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  },
  preset: "ts-jest",
  testPathIgnorePatterns: [
    "/node_modules/",
    "/__fixtures__/",
    "<rootDir>/build"
  ],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

export default config;