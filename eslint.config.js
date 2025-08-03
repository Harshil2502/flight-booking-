module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-native/all'
  ],
  plugins: [
    'react',
    'react-hooks',
    'react-native'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    'react-native/react-native': true,
  },
  globals: {
    // React Native globals
    console: 'readonly',
    process: 'readonly',
    setTimeout: 'readonly',
    clearTimeout: 'readonly',
    require: 'readonly',
    __DEV__: 'readonly',
    global: 'readonly',
    Buffer: 'readonly',
    setImmediate: 'readonly',
    clearImmediate: 'readonly',
  },
  rules: {
    // React rules
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    
    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    
    // React Native rules - more lenient
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'warn',
    'react-native/no-color-literals': 'warn',
    'react-native/no-raw-text': 'off',
    
    // General rules - more lenient
    'no-console': 'warn',
    'no-debugger': 'error',
    'prefer-const': 'warn',
    'no-var': 'warn',
    'no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignores: [
    'node_modules/**',
    'dist/**',
    'build/**',
    '.expo/**',
    'web-build/**',
    '*.config.js',
    '*.config.ts',
    'scripts/**',
  ],
}; 