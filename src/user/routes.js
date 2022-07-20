const { Router } = require("express"); // import router only from express
const {
  signUp,
  findUsers,
  deleteUser,
  updateUser,
  findUser,
  login,
} = require("./controllers"); // import only signupp from controllers
const { hashPass, comparePass, tokenCheck } = require("../middleware");

const userRouter = Router(); // create a router that can have end points added to it

userRouter.post("/user", hashPass, signUp); //Defining a post request on /user path,
// that calls the signup controller. This creates an end point.
userRouter.get("/users", findUsers);
userRouter.delete("/user/:username", deleteUser);
userRouter.patch("/user", updateUser);
userRouter.get("/finduser/:username", findUser);
userRouter.post("/login",  comparePass, login);
userRouter.get("/token", tokenCheck, login);

module.exports = userRouter;
