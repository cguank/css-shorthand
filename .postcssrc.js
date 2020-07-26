module.exports = {
  plugins: {
    'autoprefixer': {},
    //自动修复，不报错不好用，要用stylelint-order
    'postcss-sorting': {
      'order': [
        'custom-properties',
        'dollar-variables',
        'declarations',
        'at-rules',
        'rules',
      ],
      'properties-order': 'alphabetical',
      'throw-validate-errors': true,
      'unspecified-properties-position': 'bottom',
      "disableFix": true
    }
  }
}