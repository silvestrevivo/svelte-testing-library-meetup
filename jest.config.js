//* Original setup
// module.exports = {
//   "transform": {
//     "^.+\\.svelte$": "jest-transform-svelte"
//   },
//   "moduleFileExtensions": ["js", "svelte"],
//   "setupFilesAfterEnv": ["@testing-library/jest-dom/extend-expect"]
// }


module.exports = {
    transform: {
      "^.+\\.js$": "babel-jest",
      "^.+\\.svelte$": "svelte-jest"
    },
    moduleFileExtensions: ["js", "json", "svelte"],
    coverageReporters: ['html'],
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ],
};
