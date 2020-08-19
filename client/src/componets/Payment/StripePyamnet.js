import React, { useState } from 'react';

import API from '../../api/api';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from '@material-ui/core';

const CheckoutPayment = ({ total, cart, history }) => {
	const makepayment = async (token) => {
		try {
			const body = {
				token,
				cart,
				total,
			};
			const response = await API.post('/payment', body);
			if (response.status == 200) {
				console.log(response.data);
				console.log(response.data.receipt_url);
				history.push('/paymentsuccess', {
					receipt_url: response.data.receipt_url,
					address: response.data.billing_details,
				});
				console.log(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<StripeCheckout
				token={makepayment}
				stripeKey={process.env.REACT_APP_STRIPEPK}
				amount={total * 100}
				shippingAddress
				billingAddress>
				<Button variant='contained' color='primary' component='span'>
					PAY {total}&nbsp;
				</Button>
			</StripeCheckout>
		</>
	);
};
export default CheckoutPayment;
