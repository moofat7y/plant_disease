const mongoose = require("mongoose"); // Erase if already required
const bcrypt = require("bcrypt");
const crypto = require("crypto");
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passowrdResetExpire: Date,
    expireAt: {
      type: Date,
      expires: "15m",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Hash user password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Add method to validate user password
userSchema.methods.isPasswordMatch = async function (userPassword) {
  return bcrypt.compare(userPassword, this.password);
};

// Method to generate password reset token
userSchema.methods.createResetPassToken = async function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passowrdResetExpire = Date.now() + 1000 * 60 * 10; //Expire after 10 minutes
  return resetToken;
};

//Export the model
module.exports = mongoose.model("User", userSchema);
