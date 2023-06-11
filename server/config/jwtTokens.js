const jwt = require("jsonwebtoken");

// generate access token
const generateAccessToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_SECRET, {
    expiresIn: "30m",
  });
};

// generate refresh token
const generateRefreshToken = (id) => {
  return jwt.sign({ id }, process.env.REFRESH_TOKEN, {
    expiresIn: "7d",
  });
};

// token form confirm email
const generateConfirmEmail = (id, email) => {
  return jwt.sign({ id, email }, process.env.EMAIL_CONFIRM_SECRET, {
    expiresIn: "15m",
  });
};

module.exports = {
  generateConfirmEmail,
  generateAccessToken,
  generateRefreshToken,
};
