module.exports = {
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/coverage/",
    "/jest.config.js",
  ],
  collectCoverageFrom: ["**/*.{js,jsx}"],
  coverageThreshold: {
    branches: 100,
    functions: 100,
    lines: 100,
  },
};
