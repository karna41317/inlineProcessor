#!/usr/bin/env node

var reporter = require('nodeunit').reporters.
default;
reporter.run(['test']);



/*
function image_to_base64(path_to_image) {
	var type = pathinfo(path_to_image, PATHINFO_EXTENSION);
	var image = file_get_contents(path_to_image);
	var base64 = 'data:image/' + "" + type + "" + ';base64,' + "" + base64_encode(image);
}*/