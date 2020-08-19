import React from 'react';
import Button from 'react-bootstrap/Button';
import AutocompleteComponent from './AutocompleteComponent';
const PaymentProcess = () => {
	return (
		<div className='container'>
			<p>
				Please find Your name if you not able to find your Name Contact
				Us
			</p>
			<AutocompleteComponent />
		</div>
	);
};
export default PaymentProcess;
