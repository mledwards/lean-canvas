var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var debug = require('debug')('lean:app');
var _ = require('lodash');

// TODO: Add this later
// var client = require('redis').createClient(process.env.REDIS_URL || '');
// const {promisify} = require('util');
// const getAsync = promisify(client.get).bind(client);

// Set up public folder
app.use(express.static('public')); // Folder to serve static files

// Set up handlebars
var exphbs  = require('express-handlebars');
app.engine('.html', exphbs({defaultLayout: 'main', extname: '.html' }));
app.set('view engine', '.html');

// Start Crawler
app.post('/', (request, response, next) => {
	
});

app.get('/', (request, response) => {
	response.render('pages/canvas', {
		title: 'Lean',
		subtitle: 'Canvas'
	});
});

app.get('/site/:url', function(request, response) {

});

app.listen(port, function() {
	console.log('Site loaded on port ' + port);
});