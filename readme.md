# is-incognito [![Build Status](https://travis-ci.org/hemanth/is-incognito.svg?branch=master)](https://travis-ci.org/hemanth/is-incognito)

> Detects incognito mode.


## Install

```
$ npm install --save is-incognito
```


## Usage

```js
const isIncognito = require('is-incognito');
isIncognito().then(console.log, console.error).catch(console.error);

/*
If Promise is:

* resolved -> 1 
			 'incognito'

* rejected -> 1 || -1 || -2
			 'not incognito' || 'Check failed' || 'Check not implement for this ENV'

*/
```

## License

MIT © [Hemanth.HM](http://h3manth.com)
