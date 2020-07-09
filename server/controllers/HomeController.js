const { banner, impact } = require('../models');
const createError = require('http-errors');
const multer = require('multer');
const path = require('path');
const serverUrl = 'http://localhost:3000/' // jangan lupa ganti
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

class HomeController {
  static getHomeBanner = async(req, res, next) => {
    try {
      const result = await banner.findOne({ where: { name: 'Top Banner' } });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static editHomeBanner = async(req, res, next) => {
    try {
      const { title, subtitle } = req.body;
      const upload = multer({ storage: storage }).single('banner_path');
      upload(req, res, async(err) => {
        try {
          if (err instanceof multer.MulterError) throw createError(500, 'Internal Server Error');
          else if (err) throw createError(500, 'Internal Server Error');
          if (!req.file) throw createError(400, 'Input Image');
          const banner_path = serverUrl + req.file.path;
          const query = { title, subtitle, banner_path };
          const prevBanner = await banner.findOne({ where: { name: 'Top Banner' } });
          await banner.update(query, { where: { name: 'Top Banner' } });
          const regex = new RegExp(serverUrl, "g");
          const prevPath = prevBanner.banner_path.replace(regex, '');
          fs.unlinkSync(prevPath);
          res.status(200).json({ msg: 'Success' });
        } catch (err) {
          if (req.file) fs.unlinkSync(req.file.path);
          next(err);
        }
      });
    } catch (err) {
      next(err);
    }
  }
  static getWhoWeAre = async(req, res, next) => {
    try {
      const result = await banner.findOne({ where: { name: 'Who We Are' } });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static editWhoWeAre = async(req, res, next) => {
    try {
      const { title, subtitle } = req.body;
      const upload = multer({ storage: storage }).single('banner_path');
      upload(req, res, async(err) => {
        try {
          if (err instanceof multer.MulterError) throw createError(500, 'Internal Server Error');
          else if (err) throw createError(500, 'Internal Server Error');
          if (!req.file) throw createError(400, 'Input Image');
          const banner_path = serverUrl + req.file.path;
          const query = { title, subtitle, banner_path };
          const prevBanner = await banner.findOne({ where: { name: 'Who We Are' } });
          await banner.update(query, { where: { name: 'Who We Are' } });
          const regex = new RegExp(serverUrl, "g");
          const prevPath = prevBanner.banner_path.replace(regex, '');
          fs.unlinkSync(prevPath);
          res.status(200).json({ msg: 'Success' });
        } catch (err) {
          if (req.file) fs.unlinkSync(req.file.path);
          next(err);
        }
      });
    } catch (err) {
      next(err);
    }
  }
  static getImpact = async(req, res, next) => {
    try {
      const result = await impact.findAll();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static createImpact = async(req, res, next) => {
    try {
      const upload = multer({ storage: storage }).fields([{
        name: 'logo_path',
        maxCount: 1
      }, {
        name: 'main_image_path',
        maxCount: 1
      }]);
      upload(req, res, async(err) => {
        try {
          if (err instanceof multer.MulterError) throw createError(500, 'Internal Server Error');
          else if (err) throw createError(500, 'Internal Server Error');
          let logo_path;
          let main_image_path;
          if (!req.files['logo_path']) createError(400, 'Input logo image');
          if (!req.files['main_image_path']) createError(400, 'Input main image');
          if (req.files['logo_path']) logo_path = serverUrl + req.files['logo_path'][0].path;
          if (req.files['main_image_path']) main_image_path = serverUrl + req.files['main_image_path'][0].path;
          const result = await impact.create({ logo_path, main_image_path });
          res.status(201).json(result);
        } catch (err) {
          if (req.file) fs.unlinkSync(req.file.path);
          next(err);
        }
      });
    } catch (err) {
      next(err);
    }
  }
  static editImpact = async(req, res, next) => {
    try {
      const { id } = req.params;
      const impactData = await impact.findOne({ where: { id } });
      if (!impactData) throw createError(404, 'Our Impact not found');
      const upload = multer({ storage: storage }).fields([{
        name: 'logo_path',
        maxCount: 1
      }, {
        name: 'main_image_path',
        maxCount: 1
      }]);
      upload(req, res, async(err) => {
        try {
          if (err instanceof multer.MulterError) throw createError(500, 'Internal Server Error');
          else if (err) throw createError(500, 'Internal Server Error');
          let logo_path;
          let main_image_path;
          if (!req.files['logo_path']) createError(400, 'Input logo image');
          if (!req.files['main_image_path']) createError(400, 'Input main image');
          if (req.files['logo_path']) logo_path = serverUrl + req.files['logo_path'][0].path;
          if (req.files['main_image_path']) main_image_path = serverUrl + req.files['main_image_path'][0].path;
          await impact.update({ logo_path, main_image_path }, { where: { id } });
          const regex = new RegExp(serverUrl, "g");
          const prevPathLogo = impactData.logo_path.replace(regex, '');
          const prevPathMain = impactData.main_image_path.replace(regex, '');
          fs.unlinkSync(prevPathLogo)
          fs.unlinkSync(prevPathMain)
          res.status(201).json({ msg: 'Success' });
        } catch (err) {
          if (req.files['main_image_path']) fs.unlinkSync(req.files['main_image_path'][0].path);
          if (req.files['logo_path']) fs.unlinkSync(req.files['logo_path'][0].path);
          next(err);
        }
      });
    } catch (err) {
      next(err);
    }
  }
  static deleteImpact = async(req, res, next) => {
    try {
      const { id } = req.params;
      const impactData = await impact.findOne({ where: { id } });
      if (!impactData) throw createError(404, 'Our Impact Not Found');
      await impact.destroy({ where: { id } });
      const regex = new RegExp(serverUrl, "g");
      const prevPathLogo = impactData.logo_path.replace(regex, '');
      const prevPathMain = impactData.main_image_path.replace(regex, '');
      fs.unlinkSync(prevPathLogo)
      fs.unlinkSync(prevPathMain)
      res.status(200).json({ msg: 'Success' });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = HomeController;