const router = require('express').Router();
const HomeController = require('../controllers/HomeController');

router.get('/topbanner', HomeController.getHomeBanner);
router.put('/topbanner', HomeController.editHomeBanner);
router.get('/whoweare', HomeController.getWhoWeAre);
router.put('/whoweare', HomeController.editWhoWeAre);
router.get('/impact', HomeController.getImpact);
router.post('/impact', HomeController.createImpact);
router.put('/impact/:id', HomeController.editImpact);
router.delete('/impact/:id', HomeController.deleteImpact);

module.exports = router;
