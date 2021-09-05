module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
  ],
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    // シングルクォーテーション
    'quotes': ['error', 'single'],
    // インデント2
    'indent': ['error', 2],
    // オブジェクトのスペース
    'object-curly-spacing': ['error', 'always'],
    // 条件文の条件&&や||をコードの先頭に持ってくる
    'operator-linebreak': ['error', 'before'],
  },
};
