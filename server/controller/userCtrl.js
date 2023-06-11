const User = require("../models/userModel");
const { uploadImg } = require("../utils/cloudUpload");
const fs = require("fs");
exports.saveImage = async (req, res, next) => {
  const image = req.file;
  try {
    const uploader = (path) => uploadImg(path, "detection");

    const path = await uploader(image.path);

    fs.unlinkSync(image.path);
    const user = await User.findByIdAndUpdate(req.user._id, {
      $push: { "predImg.images": path, "predImg.result": { class: "disesed" } },
    });
    res.status(201).json(path);
  } catch (error) {
    next(error);
  }
};

exports.deleteImg = async (req, res, next) => {
  const { imgId } = req.body;

  try {
    // const user =
  } catch (error) {}
};
