const express = require('express');

app = express();

app.use(express.json({ extended: false }));
PORT = process.env.PORT || 8000;
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, x-auth-token',
	);
	res.header(
		'Access-Control-Allow-Methods',
		'PUT, POST, GET, DELETE, OPTIONS',
	);
	next();
});
module.exports = function (app) {
	// add other server routes to path array
	app.use(proxy(['/api'], { target: 'http://localhost:8000' }));
};
app.use('/api/getmembers', require('./router/getMemebrsList'));
app.use('/api/payment', require('./router/payemnt'));

if (
	process.env.NODE_ENV === 'production' ||
	process.env.NODE_ENV === 'staging'
) {
	app.use(express.static('client/build'));
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
app.listen(PORT, () => {
	console.log('Serever Connection Successed');
});
