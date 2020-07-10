const router = require('express').Router();
const JoinUsController = require('../controllers/JoinUsController');
const authentication = require('../middlewares/authentication');

router.get('/', JoinUsController.getBanner);
router.use(authentication);
router.put('/', JoinUsController.editBanner);

module.exports = router;
