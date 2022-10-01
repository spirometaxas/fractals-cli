# fractals-cli
Print fractals to the console!

Why the console?  Because it's the *cool* way.  [See All Fractals](https://spirometaxas.com/projects/fractals-cli)

## Usage
### Via `npx`:
```
$ npx fractals-cli <name> <n>
$ npx fractals-cli <name> <n> <size>
```

### Via Global Install
```
$ npm install --global fractals-cli
$ fractals-cli <name> <n>
$ fractals-cli <name> <n> <size>
```

### Via Import
```
$ npm install fractals-cli
```
then:
```
const fractals = require('fractals-cli');
console.log(fractals.create(<name>, <n>);
console.log(fractals.create(<name>, <n>, { size: <number>, inverse: <boolean>, character: <character> }));
```
The config params are optional. 

## License
- [MIT](https://github.com/spirometaxas/fractals-cli/blob/main/LICENSE) &copy; [Spiro Metaxas](https://spirometaxas.com)
