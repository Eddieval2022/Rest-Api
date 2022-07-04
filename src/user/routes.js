const { Router } = require("express"); // import router only from express
const { signUp, findUsers, deleteUser } = require("./controllers"); // import only signupp from controllers
const User = require("./model");

const userRouter = Router(); // create a router that can have end points added to it

userRouter.post("/user", signUp); //Defining a post request on /user path,
// that calls the signup controller. This creates an end point.
userRouter.get("/user", findUsers);
userRouter.delete("/user", deleteUser); // defining a delete request on /user path
module.exports = userRouter;
