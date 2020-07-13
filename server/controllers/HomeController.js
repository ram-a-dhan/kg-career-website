const { banner, impact, testimonial, social } = require('../models');
const createError = require('http-errors');
const multer = require('multer');
const fs = require('fs');
const storage = require('../helpers/multerStorage');

const serverUrl = 'https://fathomless-plains-81425.herokuapp.com/' // jangan lupa ganti

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
      const upload = multer({ storage: storage }).single('banner_path');
      upload(req, res, async(err) => {
        try {
          const { title, subtitle } = req.body;
          if (err instanceof multer.MulterError) throw createError(500, 'Internal Server Error');
          else if (err) throw createError(500, 'Internal Server Error');
          let query = { title, subtitle };
          if (req.file) {
            const newBannerPath = serverUrl + req.file.path.replace('public/', '');
            query.banner_path = newBannerPath;
          }
          const prevBanner = await banner.findOne({ where: { name: 'Top Banner' } });
          await banner.update(query, { where: { name: 'Top Banner' } });
          if (req.file) {
            const regex = new RegExp(serverUrl, "g");
            const prevPath = prevBanner.banner_path.replace(regex, 'public/');
            fs.unlinkSync(prevPath);
          }
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
      const upload = multer({ storage: storage }).single('banner_path');
      upload(req, res, async(err) => {
        try {
          const { title, subtitle } = req.body;
          if (err instanceof multer.MulterError) throw createError(500, 'Internal Server Error');
          else if (err) throw createError(500, 'Internal Server Error');
          let query = { title, subtitle };
          if (req.file) {
            const newBannerPath = serverUrl + req.file.path.replace('public/', '');
            query.banner_path = newBannerPath;
          }
          const prevBanner = await banner.findOne({ where: { name: 'Who We Are' } });
          await banner.update(query, { where: { name: 'Who We Are' } });
          if (req.file) {
            const regex = new RegExp(serverUrl, "g");
            const prevPath = prevBanner.banner_path.replace(regex, 'public/');
            fs.unlinkSync(prevPath);
          }
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
          let logo_path = '';
          if (!req.files['main_image_path']) createError(400, 'Input main image');
          if (req.files['logo_path']) logo_path = serverUrl + req.files['logo_path'][0].path.replace('public/', '');
          const main_image_path = serverUrl + req.files['main_image_path'][0].path.replace('public/', '');
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
          let query = {};
          if (req.files['main_image_path']) query.main_image_path = serverUrl + req.files['main_image_path'][0].path.replace('public/', '');
          if (req.files['logo_path']) query.logo_path = serverUrl + req.files['logo_path'][0].path.replace('public/', '');
          await impact.update(query, { where: { id } });
          const regex = new RegExp(serverUrl, "g");
          if (req.files['main_image_path']) {
            const prevPathMain = impactData.main_image_path.replace(regex, 'public/');
            fs.unlinkSync(prevPathMain);
          }
          if (req.files['logo_path']) {
            const prevPathLogo = impactData.logo_path.replace(regex, 'public/');
            fs.unlinkSync(prevPathLogo);
          }
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
      const prevPathLogo = impactData.logo_path.replace(regex, 'public/');
      const prevPathMain = impactData.main_image_path.replace(regex, 'public/');
      fs.unlinkSync(prevPathLogo);
      fs.unlinkSync(prevPathMain);
      res.status(200).json({ msg: 'Success' });
    } catch (err) {
      next(err);
    }
  }
  static getSingleImpact = async(req, res, next) => {
    try {
      const { id } = req.params;
      const result = await impact.findOne({ where: { id } });
      if (!result) throw createError(404, 'Infograph not found');
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static getAllTestimonial = async(req, res, next) => {
    try {
      const result = await testimonial.findAll();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static createTestimonial = async(req, res, next) => {
    try {
      const upload = multer({ storage: storage }).single('photo_path');
      upload(req, res, async err => {
        try {
          if (err instanceof multer.MulterError) throw createError(500, 'Internal Server Error');
          else if (err) throw createError(500, 'Internal Server Error');
          const { title, message, job_description } = req.body;
          if (!title || !message || !job_description || !req.file) throw createError(400, 'Input all forms');
          const photo_path = serverUrl + req.file.path.replace('public/', '');
          const result = await testimonial.create({
            title,
            message,
            job_description,
            photo_path
          });
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
  static getSingleTestimonial = async(req, res, next) => {
    try {
      const { id } = req.params;
      const result = await testimonial.findOne({ where: { id } });
      if (!result) throw createError(404, 'Testimonial not found');
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static updateTestimonial = async(req, res, next) => {
    try {
      const { id } = req.params;
      if (!id) throw createError(404, 'Input Id in params')
      const testimonialData = await testimonial.findOne({ where: { id } });
      if (!testimonialData) throw createError(404, 'Testimonial not found');
      const upload = multer({ storage: storage }).single('photo_path');
      upload(req, res, async err => {
        try {
          if (err instanceof multer.MulterError) throw createError(500, 'Internal Server Error');
          else if (err) throw createError(500, 'Internal Server Error');
          const { title, message, job_description } = req.body;
          let query = { title, message, job_description };
          if (!title || !message || !job_description) throw createError(400, 'Input all forms');
          if (req.file) query.photo_path = serverUrl + req.file.path.replace('public/', '');
          await testimonial.update(query, {
            where: {
              id
            }
          });
          if (req.file) {
            const regex = new RegExp(serverUrl, "g");
            const prevPath = testimonialData.photo_path.replace(regex, 'public/');
            fs.unlinkSync(prevPath);
          }
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
  static deleteTestimonial = async(req, res, next) => {
    try {
      const { id } = req.params;
      const testimonialData = await testimonial.findOne({ where: { id } });
      if (!testimonialData) throw createError(404, 'Testimonial not found');
      await testimonial.destroy({ where: { id } });
      const regex = new RegExp(serverUrl, "g");
      const prevPath = testimonialData.photo_path.replace(regex, 'public/');
      fs.unlinkSync(prevPath);
      res.status(200).json({ msg: 'Success' });
    } catch (err) {
      next(err);
    }
  }
  static getAllSocial = async(req, res, next) => {
    try {
      const result = await social.findAll();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static editSocial = async(req, res, next) => {
    try {
      const { id } = req.params;
      const socialData = await social.findOne({ where: { id } });
      if (!socialData) throw createError(404, 'Social Media not found');
      const { link } = req.body;
      if (!link) throw createError(400, 'Input a link');
      await social.update({ link }, { where: { id } });
      res.status(200).json({ msg: 'Success' });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = HomeController;