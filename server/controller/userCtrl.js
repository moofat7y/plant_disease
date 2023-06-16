const { uploadImg } = require("../utils/cloudUpload");
const Result = require("../models/detectionModel");
const fs = require("fs");
exports.saveImage = async (req, res, next) => {
  const image = req.file;
  const { type, diagnose, confidance } = req.body;
  try {
    const uploader = (path) => uploadImg(path, "detection");

    const path = await uploader(image.path);

    fs.unlinkSync(image.path);
    let result = await Result.findOne({ userId: req.user._id });
    if (!result) {
      result = await Result.create({ userId: req.user._id });
    }
    result.results.push({ type, confidance, image: path, diagnose });
    await result.save();
    res.status(201).json({ message: "Result saved" });
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
