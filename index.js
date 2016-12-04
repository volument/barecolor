
/*
  TODO 256 colors: https://github.com/jbnicolai/ansi-256-colors/blob/master/index.js
  console.info('\x1b[38;5;103mJOOOOO')
  process.env.TERM == xterm-256color
*/

const supported = /color|ansi|cygwin|linux/i.test(process.env.TERM)

const colors = {
  magenta: 35,
  yellow: 33,
  green: 32,
  black: 30,
  white: 37,
  blue: 34,
  cyan: 36,
  gray: 90,
  red: 31
}

Object.keys(colors).forEach(function (name) {
  const color = colors[name]

  module.exports[name] = function(str) {
    if (supported) str = `\u001b[${color}m${str}\u001b[39m`
    process.stdout.write(str)
  }

})
