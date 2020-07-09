const router = require('express').Router();
const createError = require('http-errors');
const { user } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

router.get('/', (req, res) => res.send('mantap'));

router.post('/login', async(req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw createError(400, 'Wrong email / password');
    const registeredUser = await user.findOne({ where: { email } });
    if (!registeredUser) throw createError(400, 'Wrong email / password');
    const passwordValidation = comparePassword(password, registeredUser.password);
    if (!passwordValidation) throw createError(400, 'Wrong email / password');
    const access_token = generateToken({ id: registeredUser.id });
    res.status(200).json({ access_token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
