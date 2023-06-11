const { uploadPhoto, leafImageResize } = require("../middlewares/uploadImage");
const router = require("express").Router();
const userCtrl = require("../controller/userCtrl");
const { isAuth } = require("../middlewares/isAuth");

router.post(
  "/save-detection",
  isAuth,
  uploadPhoto.single("file"),
  leafImageResize,
  userCtrl.saveImage
);

module.exports = router;
