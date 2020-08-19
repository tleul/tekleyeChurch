import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
const PaymentSuccess = ({ location }) => {
	console.log(location.state);
	useEffect(() => {
		takescrennshot();
	}, []);
	const [receipt, setreceipt] = useState({
		loading: false,
		img: '',
	});

	const takescrennshot = async () => {
		//`https://screenshotapi.net/api/v1/screenshot?url=${url}&token=18IXZH4L3WGKMYKOPENKAWVBUSSNM6F5`,
		const result = await axios.get(
			`https://screenshotapi.net/api/v1/screenshot?url=${location.state.receipt_url}&token=18IXZH4L3WGKMYKOPENKAWVBUSSNM6F5&width=500&height=850&fresh=true`,
		);
		console.log(result.data);
		setreceipt({ loading: true, img: result.data.screenshot });
	};

	return (
		<>
			{receipt.loading ? (
				<div className='paymentsuccess'>
					<div>
						{receipt.loading == true ? (
							<img src={receipt.img} alt='' />
						) : (
							<p>Loading receipt </p>
						)}
					</div>
					<div>
						<h1>Thank you for your Payment</h1>
						<p>Name: {location.state.username}</p>
					</div>
				</div>
			) : (
				<>
					<div className='loadingsuccess'>
						<p>We are Working on it </p>
						<Spinner />
					</div>
				</>
			)}
		</>
	);
};

export default withRouter(PaymentSuccess);
