const router = require('express').Router();
const HomeController = require('../controllers/HomeController');
const authentication = require('../middlewares/authentication');

router.get('/topbanner', HomeController.getHomeBanner);
router.get('/whoweare', HomeController.getWhoWeAre);
router.get('/impact', HomeController.getImpact);
router.get('/impact/:id', HomeController.getSingleImpact);
router.get('/testimonial', HomeController.getAllTestimonial);
router.get('/testimonial/:id', HomeController.getSingleTestimonial);
router.get('/social', HomeController.getAllSocial);
router.use(authentication);
router.put('/topbanner', HomeController.editHomeBanner);
router.put('/whoweare', HomeController.editWhoWeAre);
router.post('/impact', HomeController.createImpact);
router.put('/impact/:id', HomeController.editImpact);
router.delete('/impact/:id', HomeController.deleteImpact);
router.post('/testimonial', HomeController.createTestimonial);
router.put('/testimonial/:id', HomeController.updateTestimonial);
router.delete('/testimonial/:id', HomeController.deleteTestimonial);
router.put('/social/:id', HomeController.editSocial);
router.get('/navbar-link', HomeController.getNavbarLink);
router.put('/navbar-link', HomeController.editNavbarLink);

module.exports = router;
