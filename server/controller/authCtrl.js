const User = require("../models/userModel");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const {
  generateConfirmEmail,
  generateAccessToken,
  generateRefreshToken,
} = require("../config/jwtTokens");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

// Create new account (SIGNUP)
exports.signup = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error = new Error(errors.array()[0].msg);
      error.statusCode = 403;
      throw error;
    }

    const newUser = await User.create({ firstname, lastname, email, password });
    const token = generateConfirmEmail(newUser._id, newUser.email);

    const confirmationMSG = `
    <div style="border-style:solid;border-width:thin;border-color:#dadce0;border-radius:8px;padding:40px 20px" align="center" class="m_3113153394752713280mdv2rw">
      <img 
        style="object-fit:cover"
        src="https://res.cloudinary.com/dzlrv81i7/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1680870592/samples/default/undraw_Gardening_re_e658_g2skjf.jpg" 
        width="180" 
        height="120" 
        aria-hidden="true" 
        style="margin-bottom:16px" 
        alt="plant" 
        class="CToWUd" 
        data-bit="iit">
      <div style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;border-bottom:thin solid #dadce0;color:rgba(0,0,0,0.87);line-height:32px;padding-bottom:24px;text-align:center;word-break:break-word">
        <div style="font-size:24px">
          Confirm your email
        </div>
        <a style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.87);font-size:14px;line-height:20px">${newUser.email}</a>
      </div>
      <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:14px;color:rgba(0,0,0,0.87);line-height:20px;padding-top:20px;text-align:center">
        You are signed up in plant-dieases site please confirm your email to signin
        <div style="padding-top:32px;text-align:center">
          <a href="${process.env.CLIENT_URL}/confirm-email/${token}/" style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:16px;color:#ffffff;font-weight:400;text-decoration:none;font-size:14px;display:inline-block;padding:10px 24px;background-color: #6EA820;border-radius:5px;min-width:90px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://accounts.google.com/AccountChooser?Email%3Dmohammedbelal802@gmail.com%26continue%3Dhttps://myaccount.google.com/alert/nt/1602519112000?rfn%253D31%2526rfnc%253D1%2526eid%253D7075151940979537584%2526et%253D0%2526anexp%253D-control&amp;source=gmail&amp;ust=1680450201522000&amp;usg=AOvVaw2lPxF5ZwXRffazLR8nc5Fd">Confirm</a>
        </div>
      </div>
    </div>
    `;
    const data = {
      to: newUser.email,
      text: `HI ${email}`,
      subject: "confirm your email",
      html: confirmationMSG,
    };
    sendEmail(data);

    res.json({
      message: "Thanks! your account has been successfuly created.",
    });
  } catch (error) {
    next(error);
  }
};

// Confirm email
exports.confirmEmail = async (req, res, next) => {
  const { token } = req.params;
  try {
    const decodedToken = jwt.verify(token, process.env.EMAIL_CONFIRM_SECRET);
    const user = await User.findOne({
      _id: decodedToken.id,
      email: decodedToken.email,
    });
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }
    if (user.confirmed) {
      const error = new Error("This email already confirmed");
      error.statusCode = 403;
      throw error;
    }
    user.confirmed = true;
    user.expireAt = undefined;
    await user.save();

    res.status(200).json({ message: "email confirmed" });
  } catch (error) {
    next(error);
  }
};

// sigin
exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error(
        `${email} does not have an account. Try a different email or sign up.`
      );
      error.statusCode = 404;
      throw error;
    }
    if (!user.confirmed) {
      const error = new Error("Please confirm your email first");
      error.statusCode = 403;
      throw error;
    }
    const isPassCorrect = await user.isPasswordMatch(password);
    if (!isPassCorrect) {
      const error = new Error("Incorrect password");
      error.statusCode = 403;
      throw error;
    }

    // Generate access token
    const access_token = generateAccessToken(user._id);

    // Generate refresh token
    const refresh_token = generateRefreshToken(user._id);
    res.cookie("refreshToken", refresh_token, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });

    const { password: a, ...other } = user._doc;
    res.status(200).json({
      token: access_token,
    });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// Forgot passowrd
exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error = new Error(errors.array()[0].msg);
      error.statusCode = 403;
      throw error;
    }
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("This user not exist!");
      error.statusCode = 404;
      throw error;
    }
    const token = await user.createResetPassToken();
    await user.save();
    const resetUrl = `
    <div style="border-style:solid;border-width:thin;border-color:#dadce0;border-radius:8px;padding:40px 20px" align="center" class="m_3113153394752713280mdv2rw">
     <img 
        style="object-fit:cover"
        src="https://res.cloudinary.com/dzlrv81i7/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1680870589/samples/default/undraw_Designer_re_5v95_d07kqv.jpg" 
        width="180" 
        height="120" 
        aria-hidden="true" 
        style="margin-bottom:16px" 
        alt="E-commerce" 
        class="CToWUd" 
        data-bit="iit">
      <div style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;border-bottom:thin solid #dadce0;color:rgba(0,0,0,0.87);line-height:32px;padding-bottom:24px;text-align:center;word-break:break-word">
        <div style="font-size:24px">
          Reset your password
        </div>
        <a style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;color:rgba(0,0,0,0.87);font-size:14px;line-height:20px">${user.email}</a>
      </div>
      <div style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:14px;color:rgba(0,0,0,0.87);line-height:20px;padding-top:20px;text-align:center">
        Just click the button below to return your account
        <div style="padding-top:32px;text-align:center">
          <a href="${process.env.CLIENT_URL}/auth/reset-password/${token}/" style="font-family:'Google Sans',Roboto,RobotoDraft,Helvetica,Arial,sans-serif;line-height:16px;color:#ffffff;font-weight:400;text-decoration:none;font-size:14px;display:inline-block;padding:10px 24px;background-color: #6EA820;border-radius:5px;min-width:90px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://accounts.google.com/AccountChooser?Email%3Dmohammedbelal802@gmail.com%26continue%3Dhttps://myaccount.google.com/alert/nt/1602519112000?rfn%253D31%2526rfnc%253D1%2526eid%253D7075151940979537584%2526et%253D0%2526anexp%253D-control&amp;source=gmail&amp;ust=1680450201522000&amp;usg=AOvVaw2lPxF5ZwXRffazLR8nc5Fd">Reset</a>
        </div>
        <p>if button doesn't work for any reason, you cas also click on the link below:</p>
      <div>${process.env.CLIENT_URL}/auth/reset-password/${token}</div>
      </div>
    </div>
    `;
    const data = {
      to: email,
      text: `HI ${email}`,
      subject: "Forgot Password",
      html: resetUrl,
    };

    sendEmail(data);
    res.status(200).json({ message: "Check your mail" });
  } catch (error) {
    next(error);
  }
};

// Reset password
exports.resetPassword = async (req, res, next) => {
  const { password } = req.body;
  const { token } = req.params;
  const errors = validationResult(req);

  try {
    if (!errors.isEmpty()) {
      const error = new Error(errors.array()[0].msg);
      error.statusCode = 403;
      throw error;
    }
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passowrdResetExpire: { $gt: Date.now() },
    });
    if (!user) {
      const error = new Error("Token expires");
      error.statusCode = 403;
      throw error;
    }
    user.password = password;
    user.passwordResetToken = undefined;
    user.passowrdResetExpire = undefined;
    user.passwordChangedAt = Date.now();
    await user.save();
    res.status(201).json({ message: "Password changed" });
  } catch (error) {
    next(error);
  }
};

// generate new access token by refresh token
exports.handleRefreshTokenUser = async (req, res, next) => {
  const { refreshToken } = req.cookies;
  try {
    if (!refreshToken) {
      const error = new Error("No Refresh Token In Cookies");
      error.statusCode = 404;
      throw error;
    }
    const decodedToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN,
      {},
      (err, decodedToken) => {
        if (err) {
          res.clearCookie("refreshToken", {
            secure: true,
            httpOnly: true,
          });
          const error = new Error(err.message);
          error.statusCode = 417;
          error.stack = err.stack;
          throw error;
        }
        return decodedToken;
      }
    );
    const user = await User.findById(decodedToken.id);
    if (!user) {
      res.clearCookie("refreshToken", {
        secure: true,
        httpOnly: true,
      });
      const error = new Error("There is no user with this refresh token in db");
      error.statusCode = 417;
      throw error;
    }

    const accessToken = generateAccessToken(user._id);
    res.status(200).json({ accessToken: accessToken });
  } catch (error) {
    next(error);
  }
};

// Get user status
exports.getUserStatus = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);

    const { password, createdAt, updatedAt, expireAt, ...other } = user._doc;
    res.status(200).json({ ...other });
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// Logout
exports.logOut = async (req, res, next) => {
  const { refreshToken } = req.cookies;
  try {
    if (!refreshToken) {
      const error = new Error("No refresh token in cookies");
      error.statusCode = 404;
      throw error;
    }
    const decodedToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN,
      {},
      (err, decodedToken) => {
        if (err) {
          res.clearCookie("refreshToken", {
            secure: true,
            httpOnly: true,
          });
          const error = new Error(err.message);
          error.stack = err.stack;
          error.statusCode = 417;
          throw error;
        }
        return decodedToken;
      }
    );

    const user = await User.findById(decodedToken.id);
    if (!user) {
      res.clearCookie("refreshToken", {
        secure: true,
        httpOnly: true,
      });
      const error = new Error("Forbidden");
      error.statusCode = 417;
      throw error;
    }
    res.clearCookie("refreshToken", {
      secure: true,
      httpOnly: true,
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
