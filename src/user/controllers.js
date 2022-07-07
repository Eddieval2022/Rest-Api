
const jwt = require("jsonwebtoken");
const User = require("./model");

exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create(req.body); //req.body contains key value pairs that match the user model
    const token = jwt.sign({id: newUser._id},"process.env.SECRET") // sign method creates a token with object payload hidden
    if (!newUser) {
      throw new Error("User not found");
    } else {console.log(token);
      res.send({ user: newUser, token });
      
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
exports.findUser = async (req, res) => {
  try {
    const users = await User.find({ username: req.params.username });
    if (!users) {
      throw new Error("User not found");
    } else {
      res.send({ user: users });
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
exports.findUsers = async (req, res) => {
  try {
    const users = await User.find(req.body);
    res.send({ user: users });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const delUser = await User.deleteOne({ username: req.params.username });
    res.send({ user: delUser });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const editUser = await User.updateOne(
      req.body.filterObj,
      req.body.updateObj
    );
    res.send({ user: editUser });
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

exports.login = async (req, res) => {
  try {
    // const user = await User.find({
    //   username: req.body.username,
    //   password: req.body.password
    // 
    console.log("in login" + req.user )
    if (!req.user) {
      throw new Error("Incorrect username or Password");
    } else {
      res.send({ user: req.user });
      console.log("login successful")
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
