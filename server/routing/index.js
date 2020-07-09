const router = require('express').Router();
const home = require('./home');
const user = require('./user');
const joinus = require('./joinus');

router.use('/user', user);
router.use('/home', home);
router.use('/joinus', joinus);

module.exports = router;
