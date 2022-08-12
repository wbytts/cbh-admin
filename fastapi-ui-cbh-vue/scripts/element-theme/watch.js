const et = require('element-theme')

// watch mode
et.watch({
  config: 'variables',
  out: 'output/path'
})

// build
et.run({
  config: 'variables/path',
  out: 'output/path',
  minimize: true
})