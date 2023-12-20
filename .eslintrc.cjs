module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'xo',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      extends: [
        'xo-typescript',
      ],
      files: [
        '*.ts',
        '*.tsx',
      ],
      rules: {
        indent: ['error', 2],
        'arrow-parens': ['error', 'always'],
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: ['error', 2],
    '@typescript-eslint/indent': 'off',
  },
};
