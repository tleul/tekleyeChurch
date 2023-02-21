const { STRIPESECRETKEY } = require('../config');
const stripe = require('stripe')(STRIPESECRETKEY);
const { v4: uuidv4 } = require('uuid');
const express = require('express');

router = express.Router();
router.post('/', async (req, res) => {
	const { token } = req.body;

	const idempontencyKey = uuidv4();

	try {
		const response = await stripe.customers.create({
			email: token.email,
			source: token.id,
		});
		const result = await stripe.charges.create(
			{
				amount: 25 * 100,
				currency: 'usd',
				customer: response.id,
				description: `Monthly Church Membership Payment`,
			},
			{
				idempotencyKey: idempontencyKey,
			},
		);
		if (result.paid) {
			console.log('heloo');

			res.status(200).json(result);
		} else {
			res.status(403).json({ msg: 'Something Wrong' });
		}
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
