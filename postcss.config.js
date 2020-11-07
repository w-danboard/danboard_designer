module.exports = {
  plugins: {
    'postcss-import': {
      path: ['src/styles']
    },
    'postcss-preset-env': {
      features: {
        'custom-properties': {
          preserve: true
        },
        'color-mod-function': true
      }
    },
    'postcss-calc': {},
    'precss': {} // 嵌套插件
  }
}
