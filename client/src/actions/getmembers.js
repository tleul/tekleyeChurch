import API from '../api';

export const getmembers = async () => {
	const res = await API.get('/getmembers');
	return res.data;
};
