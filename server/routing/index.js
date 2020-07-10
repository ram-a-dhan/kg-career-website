const router = require('express').Router();
const home = require('./home');
const user = require('./user');
const joinus = require('./joinus');
const all = require('./all');

router.use('/user', user);
router.use('/home', home);
router.use('/joinus', joinus);
router.use('/all', all);

module.exports = router;
