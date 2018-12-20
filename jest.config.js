module.exports = {
  roots: ["<rootDir>/test"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testRegex: "(.*|(Test|.test.))\\.js$",
  moduleFileExtensions: ["js", "json", "node"]
};
