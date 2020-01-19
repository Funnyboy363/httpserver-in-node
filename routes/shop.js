const path = require('path');
const express = require('express');

const router = express.Router();

const rootDir = require('../utility/path');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'public', 'shop.html'));
});

module.exports = router;