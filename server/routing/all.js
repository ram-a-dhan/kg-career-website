const router = require('express').Router();
const { banner, impact, social, testimonial } = require('../models');


router.get('/', async(req, res, next) => {
  try {
    const bannerData = await banner.findAll();
    const impactData = await impact.findAll();
    const testimonialData = await testimonial.findAll();
    const socialData = await social.findAll();
    res.status(200).json({
      banner: bannerData,
      impact: impactData,
      testimonial: testimonialData,
      social: socialData,
    });
  } catch (err) {
    next(err);
  }
})

module.exports = router;