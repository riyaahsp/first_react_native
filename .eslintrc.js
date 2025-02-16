module.exports = {
    root: true,
    extends: [
        '@react-native-community', // Uses React Native recommended ESLint rules
        'eslint:recommended', // Standard JS rules
        'plugin:react/recommended', // React rules
        'plugin:react-hooks/recommended' // Hooks rules
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    env: {
        es6: true,
        node: true
    },
    rules: {
        'react/react-in-jsx-scope': 'off', // Not needed for React Native
        'react-native/no-inline-styles': 'warn', // Warn for inline styles
        'no-unused-vars': 'warn', // Warn for unused variables
        'prettier/prettier': ['error', { endOfLine: 'auto' }] // Keep formatting consistent
    },
    plugins: ['react', 'react-native', 'prettier']
};
