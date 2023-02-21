const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	//Stripe secrete key
	STRIPESECRETKEY: process.env.STRIPESECRETKEY,
};
