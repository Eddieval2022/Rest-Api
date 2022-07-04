const User = require("./model");

exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body); //req.body contains key value pairs that match the user model
    res.send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
exports.findUsers = async (req, res) => {
  try {
    const users = await User.find(req.body);
    res.send({ users });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
exports.deleteUser = async (req, res) => {
  const removeUser = await User.deleteOne(req.body);
  res.send({ user: removeUser });
  try {
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
exports.deleteUser = async (req, res) => {
  const delUser = await User.deleteOne(req.body);
  res.send({ user: delUser });
  try {
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
