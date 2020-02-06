

![Barecolor logo](https://volument.com/images/console-color.png)

An extremely tiny JavaScript utility for printing colorful console messages. Just ~15 lines of code and no dependencies. Nothing fancy.


### Install
```
npm install --save-dev baretest
```

With [pnpm](//pnpm.js.org)

```
pnpm install --save-dev baretest
```

### Usage

``` javascript
const print = require('barecolor')

// output some colors
print.black('This is black')
print.blue('This is blue')
print.cyan('This is cyan')
print.gray('This is gray')
print.green('This is green')
print.magenta('This is magenta')
print.red('This is red')
print.white('This is white')
print.yellow('This is yellow')

// line versions
print.blackln('This line is black')
print.blueln('This line is blue')
print.cyanln('This line is cyan')
print.grayln('This line is gray')
print.greenln('This line is green')
print.magentaln('This line is magenta')
print.redln('This line is red')
print.whiteln('This line is white')
print.yellowln('This line is yellow')
```

## License

Copyright 2020 OpenJS Foundation and contributors. Licensed under [MIT](./LICENSE).

