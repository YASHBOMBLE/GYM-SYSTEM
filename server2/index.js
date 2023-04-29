

import validator from 'validator';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js'
import Trainer from './models/Trainer.js';
import Contact from './models/Contact.js';
import Exercise from './models/Exercise.js'
import nodemailer from 'nodemailer'
dotenv.config();
const app = express();
app.use(express.json());




const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connected to MongoDB');
})

//api route start here
app.post('/sendmail', (req, res) => {
    const mail = req.body;

    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "yashbomble2003@gmail.com", // generated ethereal user
                pass: "" // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Yash" yashbomble@.com', // sender address
            to: "yashbomble2002@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>This is testing</b><button>Test Mail </button>", // html body
        });

       // console.log("Message sent: %s", info.messageId);

        res.json({
            success : true,
            message : "Otp sent",
            data : info.messageId
        })
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        //console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);

})


//validation api

app.post('/signup', async (req, res) => {
    const { name, phone, email, password, weight, age, role } = req.body;
   
    // validation to check if all fields are filled starts here
    const emptyFields = [];

    if (!name) emptyFields.push('name');
    if (!weight) emptyFields.push('weight');
    if (!phone) emptyFields.push('phone');
    if (!email) emptyFields.push('email');
    if (!password) emptyFields.push('password');
    if (!age) emptyFields.push('age');
    if (!role) emptyFields.push('role');
    if (emptyFields.length > 0) {
        return res.json({
            success: false,
            message: `${emptyFields.join(', ')} are required`
        })
    }
    // validation to check if all fields are filled ends here

   

    // validation to check if email already exists starts here
     const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.json({
            success: false,
            message: "Email already exists"
        })
    }
    // validation to check if email already exists ends here

    // validation to check if phone already exists starts here
    
    const existingUserPhone = await user.findOne({ phone: phone });
    if (existingUserPhone) {
        return res.json({
            success: false,
            message: "Phone already exists"
        })
    }
    // validation to check if phone already exists ends here

    const min = 1000;
    const max = 9999;
    const userid = Math.floor(Math.random() * (max - min + 1)) + min;

    const user = new User({
        userid : userid,
        name: name,
        email: email,
        phone: phone,
        password: password,
        weight: weight,
        age: age,
        role: role
    })

    const savedUser = await user.save();

        res.json({
            success: true,
            message: "User created successfully",
            data: savedUser
        })
   

})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            success: false,
            message: "Email and password are required"
        })
    }

    const existingUser = await User.findOne({ email: email, password: password });

    if (existingUser) {
        return res.json({
            success: true,
            message: "Login successful",
            data: existingUser
        })
    }
    else {
        return res.json({
            success: false,
            message: "Invalid email or password"
        })
    }
})

app.post('/addTrainer', async (req, res) => {
    const { name, category, phone } = req.body;

    const trainer = new Trainer({
        name: name,
        category: category,
        phone: phone
    })

    const savedTrainer = await trainer.save();

    res.json({
        success: true,
        message: "Trainer created successfully",
        data: savedTrainer
    })

})

app.get('/viewusers',async (req,res)=>{
    const users = await User.find();

    res.json({
        success : true,
        message : "users fetch successfully",
        data : users
    })
})

app.get('/viewtrainer',async (req,res)=>{
    const trainer = await Trainer.find();

    res.json({
        success : true,
        message : "trainers fetch successfully",
        data : trainer
    }) 
})

app.post('/addexercise', async(req,res)=>{
    const {uname,day,exername,sets,imgUrl} = req.body;
    const exercise = new Exercise({
        uname: uname,
        day : day,
        exername : exername,
        sets : sets,
        imgUrl : imgUrl
    })

    const savedExercise = await exercise.save();
   
        res.json({
            success: true,
            message: "Exercise saved successfully",
            data: savedExercise
        })
    

})

app.get('/viewexercise',async (req,res)=>{
    const exercise = await Exercise.find();

    res.json({
        success : true,
        message : "exercises fetch successfully",
        data : exercise
    }) 
})
app.post('/contact',async (req,res)=>{
    const {name , email , message} = req.body;
   
    if(!validator.isEmail(email))
    {
        return res.json({
            success : false,
            message : "Enter valid Email"
        })
    }
    const contact = new Contact({
       name : name,
       email : email,
       message : message
    })

    const savedContact = await contact.save();
   
        res.json({
            success: true,
            message: "message sent successfully",
            data: savedContact
        })
    

})
app.get('/viewmessage', async(req,res)=>{
    const contact = await Contact.find();

    res.json({
        success : true,
        message : "Contact fetch successfully",
        data : contact
    }) 

})

//api routes end here


app.listen(5000, () => {
    console.log(`Server is running on port ${PORT}`);
})