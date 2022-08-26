const userModel = require("../models/users.model");

const signupController = async (req, res) => {
  try {
    const { email, password, firstname } = req.body;
    if (!email || !password || !firstname) {
      return res.status(400).json({ msg: `Empty field(s), try again` });
    }
    const oldAccount = await userModel.findOne({ email });
    if (oldAccount) {
      return res
        .status(400)
        .json({ msg: `This ${email} is already in use .. try another one` });
    }
    const newUser = await userModel.create({
      firstname,
      email,
      password: hashPassword,
    });
    res.status(201).json({ masg: `Account created successfully` }, newUser);
  } catch (error) {
    console.log(error.message);
  }
};

exports.loginController = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  await compareSync(password, user.password);
};
module.exports = signupController;
