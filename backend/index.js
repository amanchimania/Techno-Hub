const express = require('express')
const app = express()
const port = 4000;
const bcrypt = require('bcrypt')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const SignUpModel = require('./Models/userModel')
const middleware = require("../backend/middlewares/aboutus")

app.use(cors())
app.use(express.json())


app.get("/aboutus", middleware, (req, res) => {

})

app.listen(port, () => {
    console.log(`server listening at ${port}`);
})

app.get("/get_retailer", (req, res) => {
    console.log("get retailer");
    res.send("retailer received")
})




app.post('/userLogin', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body)
    const userExist = await SignUpModel.findOne({ username: username });
    // console.log(userExist)
    // console.log(password)
    if (userExist === null) {
        res.status(400).send({ error: `Username does not exists` })
    } else {
        const hashedPwd = userExist.password;
        if (bcrypt.compareSync(password, hashedPwd)) {
            res.status(200).send({ success: "Logged in" });
        } else {
            res.status(401).send({ error: "Password is incorrect." });
        }
    }
})

app.post('/userSignup', async (req, res) => {
    const { fullName, username, password, city, pincode, phone } = req.body;
    // console.log(req.body)
    const userExist = await SignUpModel.findOne({ username: username });
    // console.log(userExist)

    // console.log(password)
    if (userExist) {
        res.status(400).send({ error: `Username ${username} already exists.Please choose another Username.` })
    } else {

        // const pass = bcrypt.hash(password, 12).then((hash) => {
        //     this.password = hash;
        // });
        // console.log(passs);
        let a = 10;
        const pass = bcrypt.hashSync(password, 1);

        console.log("----------------------------" + pass);
        const newUser = new SignUpModel({
            fullName, username, password: pass, city, pincode, phone
        })


        await newUser.save();
        // console.log(newUser._id);

        res.send({ message: `User ${username} has been created` })
    }
})

const DB_CONNECTION_STRING = `mongodb+srv://demo-node-crud:fTMfREolBn8DFo2E@cluster0.77ca8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
    .connect(DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(8080))
    .catch((err) => console.log(err));