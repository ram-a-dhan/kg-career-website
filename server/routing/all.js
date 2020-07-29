const router = require('express').Router();
const { banner, impact, social, testimonial, navbar_link } = require('../models');


router.get('/', async(req, res, next) => {
  try {
    const bannerData = await banner.findAll();
    const impactData = await impact.findAll();
    const testimonialData = await testimonial.findAll();
    const socialData = await social.findAll();
    const navbarLink = await navbar_link.findAll();
    res.status(200).json({
      navbarLink: navbarLink[0],
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