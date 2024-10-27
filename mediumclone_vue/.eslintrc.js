// eslint-disable-next-line no-unused-vars
const OFF = 0,
  // eslint-disable-next-line no-unused-vars
  WARN = 1,
  ERROR = 2;

module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/essential', '@vue/standard'],
  rules: {
    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    semi: [ERROR, 'always'],
    quotes: [ERROR, 'single'],
    eqeqeq: OFF,
    'no-unused-vars': ERROR,
    'vue/valid-v-for': 0,
    'vue/require-v-for-key': OFF,
    indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral > *'] }],
    'arrow-parens': [ERROR, 'always'],
    'one-var': OFF,

    'import/first': ERROR,
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': ERROR,
    'import/extensions': OFF,
    'import/no-unresolved': OFF,
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': ERROR,
    // 'no-multiple-empty-lines': OFF,
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': [
      'error',
      {
        arrays: 'ignore',
        objects: 'ignore',
        imports: 'ignore',
        exports: 'ignore',
        functions: 'never',
      },
    ],
    // 'keyword-spacing': [
    //   'error',
    //   {
    //     overrides: {
    //       if: { after: false },
    //       for: { after: false },
    //       while: { after: false },
    //     },
    //   },
    // ],
  },

  globals: {
    ajax: true,
    ajaxModular: true,
    moment: true,
    _isEqual: true,
    _cloneDeep: true,
    Vue: true,
  },
};
