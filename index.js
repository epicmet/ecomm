const express = require("express");
// bodyParser is deprecated, instead I used express.urlencoded
// const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="passoword" />
        <input name="passwordConfirmation" placeholder="password confirmaition" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Account created!!");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
