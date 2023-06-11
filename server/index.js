const express = require("express");
const cors = require("cors");
const env = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// Import routes
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");

// Initialize the server
const app = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://plant-disease-moofat7y.vercel.app",
  ],
  credentials: true,
};

// Connect to database
dbConnect();

// Apply middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

// Catching all errors form middlwares
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const errMessage = error.message;
  const stack = error.stack;
  res.status(status).json({ message: errMessage, stack });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
