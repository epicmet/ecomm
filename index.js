const express = require("express");
// bodyParser is deprecated, instead I used express.urlencoded
// const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const usersRepo = require("./repositories/users");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["n34ias8lf"],
  })
);

app.get("/signup", (req, res) => {
  res.send(`
    <div>
      Your ID is: ${req.session.userId}
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="passoword" />
        <input name="passwordConfirmation" placeholder="password confirmaition" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

app.post("/signup", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;

  const existingUser = await usersRepo.getOneBy({ email });
  if (existingUser) return res.send("Email is in use!");

  if (password !== passwordConfirmation)
    return res.send("Password must match!");

  const user = await usersRepo.create({ email, password });
  req.session.userId = user.id;

  res.send("Account created!!");
});

app.listen(3000, () => {
  console.log("Listening on Port 3000");
});
