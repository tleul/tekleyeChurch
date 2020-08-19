import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import API from '../../api';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from '@material-ui/core';

const CheckoutPayment = ({ total, history, name }) => {
	const makepayment = async (token) => {
		try {
			const body = {
				token,
				name,
			};
			const response = await API.post('/payment', body);
			if (response.status == 200) {
				console.log(response.data);
				console.log(response.data.receipt_url);
				history.push('/paymentsuccess', {
					receipt_url: response.data.receipt_url,
					username: name,
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
				amount={25 * 100}
				billingAddress>
				{''}
				<i style={{ textJustify: 'center' }}>
					You will be charged monthly fee of 25$ click pay to proceed
				</i>
				<br />
				<Button
					disabled={!name}
					variant='contained'
					color='primary'
					component='span'>
					PAY 25$&nbsp;
				</Button>
			</StripeCheckout>
		</>
	);
};
export default withRouter(CheckoutPayment);
