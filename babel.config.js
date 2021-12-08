module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@assets': './src/assets',
          '@components': './src/components',
          '@data': './src/data',
          '@helpers': './src/helpers',
          '@locales': './src/locales',
          '@navigation': './src/navigation',
          '@routes': './src/routes',
          '@styles': './src/styles',
        },
      },
    ],
  ],
};
