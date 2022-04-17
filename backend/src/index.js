const express = require('express');

const connect = require("./config/db");
const { register, login } = require('./controllers/auth.controller');
const userController = require("./controllers/user.controller")
const apartmentController=require("./controllers/apartment.controller")


const app = express();

app.use(express.json());

app.use("/users", userController)
app.use("/apartments", apartmentController)
app.post("/register", register)
app.post("/login", login)




const port = process.env.PORT || 5000;

app.listen(2345, async () => {
    try {
        await connect();
        console.log(`listening to port ${port}`);

    } catch (err) {
        console.log(err.message);
    }
});
