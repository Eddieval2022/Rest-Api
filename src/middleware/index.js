const bcrypt = require("bcryptjs");
const User = require("../user/model");
const jwt = require("jsonwebtoken")
exports.hashPass = async (req, res, next) => {
  try {
    // const tempPass = req.body.password;  //grab password from body and store locally
    // const hashedPass = await bcrypt.hash(tempPass, 8); // hashed password and stored in new constant
    // req.body.password = hashedPass; //stores freshly hashed password back in the req body
    req.body.password = await bcrypt.hash(req.body.password, 8); // all three steps above in one line
    next(); //Moves onto next middlewhere / controller in endpoint
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

//First

// exports.checkPass = async (req, res, next) => {
//   try {
//     req.body.password = await bcrypt.compare(req.body.password, 8); 
//     next(); 
//   } catch (error) {
//     console.log(error);
//     res.send({ error });
//   }
// };



// exports.checkPass = async (req,res,next) => {
//   try{
//       const userCheck = await User.find({ 
//           username: req.body.username
//         })
//       const check = await bcrypt.compare(req.body.password, userCheck.password); 
//           if(check){ 
//           next(); 
//       }
//       else{
//           throw new Error("incorrect details");
//       }
//   } catch(error){
//       console.log(error);
//       res.send({error})
//   }
// }

exports.comparePass = async (req,res,next) => {
  try{
req.user = await User.findOne({username: req.body.username});
// const match = await bcrypt.compare(req.body.password, user.password)
if (await bcrypt.compare(req.body.password, req.user.password)){
  // req.user = user
  next()
}else{
  throw new Error ("Incorrect Password")
}
  }catch (error){
    console.log(error);
    res.send({error})
  }
}

exports.tokenCheck = async (req,res,next) => {

  try{
    // const token = req.header("Authorisation"); // grab token from authorisation header in the request
const decodedToken = jwt.verify(req.header("Authorization"), process.env.SECRET); // decode token using same secret that creates
     req.user = await User.findById(decodedToken.id);
 
next()
  }catch(error){
    console.log(error);
    res.send({error})
  }
}