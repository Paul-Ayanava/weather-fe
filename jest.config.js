module.exports = {
  verbose: true,
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/index'],
  coverageReporters: ['clover', 'json', 'json-summary', 'lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: [
    '<rootdir>/src/index',
    '<rootDir>/.husky',
    '<rootDir>/node_modules',
    '<rootDir>/build',
    '<rootDir>/out',
    '<rootDir>/coverage',
    '/e2e-tests/'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js'
  }
}

