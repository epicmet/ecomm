const express = require("express");

const app = express();

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
  res.send("Account created!!");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
