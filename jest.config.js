module.exports = {
    "verbose": true,
    "collectCoverage": true,
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.ts?$": "ts-jest"
    },
    "collectCoverageFrom": [
        "**/*.ts"
    ],
    "coveragePathIgnorePatterns": [
        "types.ts",
        "config.ts",
        "App.ts",
        "Server.ts",
        "index.ts",
        ".schema.ts"
    ]
}