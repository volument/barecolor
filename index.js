
const colors = { black: 30, red: 31, green: 32, yellow: 33, blue: 34, magenta: 35, cyan: 36, white: 37, gray: 90 },
  supported = /_color|ansi|cygwin|linux|xterm/i.test(process.env.TERM)

for (let name in colors ) {
  const color = colors[name]

  const fn = module.exports[name] = function(msg) {
    if (supported) msg = `\u001b[${color}m${msg}\u001b[39m`
    process.stdout.write(msg)
  }

  module.exports[name + 'ln'] = function(str) {
    fn(str + '\n')
  }

}
