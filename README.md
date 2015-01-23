# through2-jsonreader
A simple transform stream that parses JSON

## Installation

```console
npm install through2-jsonreader
```

or

```console
npm install --save through2-jsonreader
```

## Usage

```javascript
var jsonReader = require('through2-jsonreader');

var parser = jsonReader();

parser.write('{"hello":"world"}');

parser.on('data', function(datum){
  console.log(datum.hello); //outputs "world"
});
```