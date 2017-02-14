var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/labsix');


/* GET pages */
router.get('/', ctrlMain.home);
router.get('/homework', ctrlMain.homework);
router.get('/pageone', ctrlMain.pageone);
router.get('/pagetwo', ctrlMain.pagetwo);



module.exports = router;
