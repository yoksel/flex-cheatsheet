module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],
    // fix: Cannot read property 'range' of null
    //https://github.com/babel/babel-eslint/issues/681#issuecomment-420663038
    'template-curly-spacing' : 'off',
    indent : "off"
  },
  "ignorePatterns": ["**/*test.js"]
}
