const express = require('express');
const homeController = require('../controllers/homeController');


const router = express.Router();
console.log('Router UP!');

router.get('/', homeController.root);
router.get('/whatsappMessage', homeController.whatsappMessage);


module.exports = router;