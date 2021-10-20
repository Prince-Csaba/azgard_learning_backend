const SignedUser = require("../models/signup.model");

exports.Signup =  async (req, res) => {
  console.log('Hellooooooooooooooooo!')
  console.log(req.body);

  let newUser = new SignedUser({ email: req.body.email, name: "Ghost"});
 
  // save model to database
  newUser.save(function (err, user) {
    if (err) return console.error(err);
    console.log(user.email + " saved to bookstore collection.");
  });
}
