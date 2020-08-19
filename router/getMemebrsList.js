const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const fs = require('fs');

const db = require('../data.json');

router.get('/', (req, res) => {
	const members = db.memberslist;

	return res.json(members);
});

module.exports = router;
