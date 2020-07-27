const router = require('express').Router();
const photosController = require('../controllers/photos');

router.get('/',photosController.get_photos);

module.exports = router;