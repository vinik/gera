/**
 * 
 */

var language = "PHP";
var caseType = "camel";
var documentation = false;



var http = require('http');
http.createServer(function (req, res) {
	
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1618, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1618/');



function generateGetter(propertyName)
{
	var srcCode = "function get" + propertyName + "() { return $this->" + propertyName + "; }";
	return srcCode;
}

function generateSetter(propertyName)
{
	var srcCode = "function set" + propertyName + "($" + propertyName + ") { $this->" + propertyName + " = $" + propertyName +"; }";
	return srcCode;
}