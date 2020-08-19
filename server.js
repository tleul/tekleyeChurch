const express = require('express');

app = express();

PORT = process.env.PORT || 8000;

app.use('/api/getmembers', require('./router/getMemebrsList'));

app.listen(PORT, () => {
	console.log('Serever Connection Successed');
});
