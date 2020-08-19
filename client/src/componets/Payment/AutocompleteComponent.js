/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getmembers } from '../../actions/getmembers';

import Spinner from './Spinner';
import CheckoutPayment from './StripePyamnet';
export default function AutocompleteComponent() {
	const [input, setInput] = useState('');

	const [members, setmemebers] = useState({
		membersList: [],
		loading: false,
	});
	const { loading, membersList } = members;
	const [form, setform] = useState({
		membname: '',
	});
	const { membname } = form;

	useState(async () => {
		const res = await getmembers();
		setmemebers({
			membersList: res,
			loading: true,
		});
	});
	const onClick = (e) => {
		console.log(input);
	};
	console.log(members.membersList);
	return (
		<>
			{loading == true ? (
				<div style={{ width: 300 }}>
					<Autocomplete
						id='free-solo-2-demo'
						disableClearable
						value={membname}
						onChange={(e, v) => setInput(v)}
						options={members.membersList.map((item) => item.name)}
						getOptionLabel={(option) => option}
						filterSelectedOptions
						renderInput={(params) => (
							<TextField
								{...params}
								label='Look up Your Name'
								margin='normal'
								variant='outlined'
								InputProps={{
									...params.InputProps,
									type: 'search',
								}}
							/>
						)}
					/>
					{input.length > 1 ? (
						<>
							<br />

							<h6 style={{ color: 'red' }}>{input}</h6>
							<br />
						</>
					) : (
						''
					)}

					<CheckoutPayment name={input} />
				</div>
			) : (
				<Spinner />
			)}
		</>
	);
}
