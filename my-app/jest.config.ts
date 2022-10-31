module.exports = {
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'jsdom',
    testMatch: ['<rootDir>/src/**/*.test.{js,ts,tsx}'],
    transform: {
        '\\.[jt]sx?$': ['babel-jest'],
    },
};