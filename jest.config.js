module.exports = {
    "moduleFileExtensions": [
        "ts",
        "js"
    ],
    "roots": [
        "src"
    ],
    "testMatch": [
        "**/?(*.)spec.ts?(x)"
    ],
    "transform": {
        "^.+\\.(t|j)s$": "ts-jest"
    },
    "modulePaths": ["<rootDir>/src"]
}