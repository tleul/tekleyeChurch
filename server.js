const express = require('express');

app = express();

app.use(express.json({ extended: false }));

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

app.use('/api/getmembers', require('./router/getMemebrsList'));
PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log('Serever Connection Successed');
});
