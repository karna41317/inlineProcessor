'use strict';
var utils = require('../lib/utils');
var htmlprocessor = require('../index');
module.exports = {
	masterhtml: function(test) {
		test.expect(1);

		htmlprocessor({
			src: ['test/fixtures/masterhtml.html'],
			dest: 'test/fixtures/masterhtml/masterhtml.processed.html'
		});
		var actual = utils.read('test/fixtures/masterhtml/masterhtml.processed.html');
		var expected = utils.read('test/expected/masterhtml/masterhtml.html');
		test.equal(actual, expected, 'should masterhtml css and js for dist target');
		test.done();
	}
};