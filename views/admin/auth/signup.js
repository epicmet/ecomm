const layout = require("../layout");

const getError = (errors, prop) => {
  try {
    return errors.mapped()[prop].msg;
  } catch (err) {
    return "";
  }
};

module.exports = ({ req, errors }) => {
  return layout({
    content: `
      <div>
        Your ID is: ${req.session.userId}
        <form method="POST">
          <input name="email" placeholder="email" />
          ${getError(errors, "email")}
          <input name="password" placeholder="passoword" />
          ${getError(errors, "password")}
          <input name="passwordConfirmation" placeholder="password confirmaition" />
          ${getError(errors, "passwordConfirmation")}
          <button>Sign Up</button>
        </form>
      </div>
    `,
  });
};
