module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest"
    },
    moduleFileExtensions: ["js", "jsx"],
    setupFilesAfterEnv: ["@testing-library/jest-dom"],
    transformIgnorePatterns: ["/node_modules/"]
};
  