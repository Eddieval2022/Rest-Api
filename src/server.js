require("./db/connection");// instantly run db connection
const express = require ("express");
const userRouter = require("./user/routes");// bing in all end points connected to user router
const app = express(); //creaete webserver constant to manipulate
const port = process.env.PORT || 5001;

app.use(express.json()); //parses all requests as if they are JSON

app.use(userRouter);    //important these 2 lines run before listen

app.listen(port, () => {
    console.log( `listening on port ${port}`)
});
//listening on 5001 or provided port on current location