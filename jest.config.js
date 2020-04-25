module.exports = {
    "verbose": true,
    "testEnvironment": "node",
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
        ".schema.ts",
        ".database.ts",
        ".mock.ts",
        ".routes.ts",
        ".validation.ts"
    ]
}