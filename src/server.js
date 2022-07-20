require("./db/connection");// instantly run db connection
const express = require ("express");
const userRouter = require("./user/routes");// bing in all end points connected to user router
const app = express(); //creaete webserver constant to manipulate
const port = process.env.PORT || 5001;
const cors = require("cors")
app.use(express.json()); //parses all requests as if they are JSON

app.use(cors()); //allows requests to be made from other node apps from any origin
app.use(userRouter);    //Uses the userRouter and endpoints

app.listen(port, () => {
    console.log( `listening on port ${port}`)
});
// listening on 5001 or provided port on current location