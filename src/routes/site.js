const express = require('express');
const SiteController = require('../app/controllers/SiteController');
const router = express.Router();


router.get('/', SiteController.home);

module.exports = router;
