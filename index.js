const express = require("express");
// bodyParser is deprecated, instead I used express.urlencoded
// const bodyParser = require("body-parser");
const usersRepo = require("./repositories/users");

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

app.post("/", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;

  const existingUser = await usersRepo.getOneBy({ email });
  if (existingUser) return res.send("Email is in use!");

  if (password !== passwordConfirmation)
    return res.send("Password must match!");

  res.send("Account created!!");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
