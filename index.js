const express = require("express");
// bodyParser is deprecated, instead I used express.urlencoded
// const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["n34ias8lf"],
  })
);

app.use(authRouter);

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
