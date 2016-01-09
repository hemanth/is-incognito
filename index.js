'use strict';
var isChrome = require('is-chrome');
var fs = typeof window !== 'undefined' &&
	(window.RequestFileSystem || window.webkitRequestFileSystem);

module.exports = function () {
	return new Promise((resolve, reject) => {
		if (isChrome()) {
			if (!fs) {
				reject(-1); // 'Check failed.'
			}
			fs(window.TEMPORARY, 100,
				() => resolve(0), // 'incognito'
				() => reject(1)); // 'not incognito'
		} else {
			reject(-2); // 'Check not implemented for this ENV.'
		}
	});
};
