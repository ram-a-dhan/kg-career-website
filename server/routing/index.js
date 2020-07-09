const router = require('express').Router();
const home = require('./home');
const authentication = require('../middlewares/authentication');
const user = require('./user');

router.use('/user', user);
router.use(authentication);
router.use('/home', home);

module.exports = router;
