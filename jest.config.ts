/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsconfig = require("./tsconfig.json");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig);

export default {
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  globalSetup: "<rootDir>/test/scripts/globalSetup.ts",
  globalTeardown: "<rootDir>/test/scripts/globalTeardown.ts",
  setupFilesAfterEnv: ["<rootDir>/test/scripts/setupFile.ts"],
  moduleNameMapper,
  globals: {
    "ts-jest": {
      warnOnly: true,
      diagnostics: false,
    },
  },
};
