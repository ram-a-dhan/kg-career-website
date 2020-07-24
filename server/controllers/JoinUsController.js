const { banner } = require('../models');
const multer = require('multer');
const storage = require('../helpers/multerStorage');
const fs = require('fs');

const serverUrl = 'http://dev.growwithkg.id/' // jangan lupa ganti

class JoinUsController {
  static getBanner = async(req, res, next) => {
    try {
      const result = await banner.findOne({ where: { name: 'Join Us' } });
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  }
  static editBanner = async(req, res, next) => {
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
          const prevBanner = await banner.findOne({ where: { name: 'Join Us' } });
          await banner.update(query, { where: { name: 'Join Us' } });
          let result = prevBanner.banner_path;
          if (req.file) {
            const regex = new RegExp(serverUrl, "g");
            const prevPath = prevBanner.banner_path.replace(regex, 'public/');
            fs.unlinkSync(prevPath);
            result = serverUrl + req.file.path.replace('public/', '');
          }
          res.status(200).json({ url: result });
        } catch (err) {
          if (req.file) fs.unlinkSync(req.file.path);
          next(err);
        }
      });
    } catch (err) {
      next(err);
    }
  }
};

module.exports = JoinUsController;