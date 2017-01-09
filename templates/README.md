# <%= appName %>

<%= appDescription %>

## Table of Contents

* [Installation](#installation)
* [Quick start](#quick-start)
* [Example](#example)
* [Tests](#tests)
* [People](#people)
* [License](#license)

## Installation

Download from github:

```bash
$ git clone https://github.com/<%= userName %>/<%= appName %>.git
```

Install the packages

```bash
$ cd <%= appName %> && npm install
```

## Quick start

Start the server

`npm start`

Page will load locally at http://localhost:8080

## Example

To view the example, clone the repo and install the dependencies:

```
$ git clone git://github.com/<%= userName %>/<%= appName %>.git
$ cd <%= appName %>
$ npm install
```

Then run the example:

```
$ node example/index.js
```

#### Example request

```js
$.ajax( {
  url     : 'http://localhost:3000/api',
  cache   : false,
  type    : 'post',
  datatype: 'json',
  data    : {},
  success : function ( data ) {
    console.log( data );
  }
} );
```

## Tests

Tests are in the `test` folder.

If you haven't already installed the dependencies:

```
$ npm install
```

Then run the tests:

```
$ npm test
```

## People

The original author is [@<%= authorName %>](https://github.com/<%= userName %>).

## License

[BSD](LICENSE)

---

[back to top](#<%= appName %>)
