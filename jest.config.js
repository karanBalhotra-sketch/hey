module.exports = {
  // Other Jest configuration (if needed)
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
