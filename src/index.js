require("dotenv").config();
const PORT = process.env.PORT || 5000
const express = require("express");
const usersRoutes = require("./routes/users.js");
const middlewareLogRequest = require("./middleware/logs.js");
const upload = require("./middleware/multer");

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static("public/images"));
app.use("/users", usersRoutes);
app.post("/upload", upload.single("photo"), (req, res) => {
  res.json({
    message: "Upload berhasil",
  });
});
app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});


app.listen(4000, () => {
  console.log(`Server Running on port ${PORT}`);
});
