const multer = require("multer");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: (req, file, cb) => {
    const uniqueId = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, file.fieldname + "-" + uniqueId + ".jpeg");
  },
});
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsuported file format" }, false);
  }
};

const uploadPhoto = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: 2000000 },
});

const leafImageResize = async (req, res, next) => {
  if (!req.file) return next();
  const file = req.file;
  await sharp(file.path)
    .resize(256, 256, {
      fit: "cover",
    })
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/images/leafs/${file.filename}`);
  fs.unlinkSync(file.path);
  file.path = `public/images/leafs/${file.filename}`;
  next();
};

module.exports = { uploadPhoto, leafImageResize };
