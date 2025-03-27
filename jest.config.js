module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"],
  moduleNameMapper: {
    "^@stringCalculator$": "<rootDir>/src/index.ts",
    "^@calculator$": "<rootDir>/src/calculator.ts",
    "^@types/(.*)$": "<rootDir>/src/types/$1",
  },
};
