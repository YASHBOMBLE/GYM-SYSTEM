

import validator from 'validator';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js'
import Trainer from './models/Trainer.js';
import Contact from './models/Contact.js';
import Exercise from './models/Exercise.js'
import nodemailer from 'nodemailer'
import path from 'path';
const __dirname = path.resolve();
dotenv.config();
const app = express();
app.use(express.json());




const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://yashbomble:yash2002@cluster0.mt2buo2.mongodb.net/GymSystem", () => {
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


app.post('/validate',async(req,res)=>{
    const { name, phone, email, password, role } = req.body;
//Name VAlidation
    if(!validator.isAlpha(name) )
    {
        return res.json({
            success: false,
            message: "Name is in String"
        })
    }
   
    
    
    //password validation

    if(!validator.isStrongPassword(password))
    {
        return res.json({
            success: false,
            message: "Password Contains letters A-Z a-z 0-9 or Special Symbol (minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1)"
        })
    }
    
    //Email validation
  
    
    
//Phone number Validation
    if(validator.isAlpha(phone))
    {
        return res.json({
            success: false,
            message: "Mobile number Must be in Digit"
        })
    }
   

    if (phone.length < 10 || phone.length >= 11) {
        return res.json({
            success: false,
            message: "Mobile No Must be 10 Digit"
        })
    }

    res.json({
        success: true,
        message: "User created successfully"
    })
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
    
    const existingUserPhone = await User.findOne({ phone: phone });
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
    const { name, category, phone,email } = req.body;

    const trainer = new Trainer({
        name: name,
        category: category,
        phone: phone,
        email : email
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

app.get('/users', async (req,res)=>{
    const user = await User.find();

    res.json({
        success : true,
        message : "trainers fetch successfully",
        data : user
    })
})
app.post('/addexercise', async(req,res)=>{
    const {uname,day,exername,sets,imgUrl,dayId} = req.body;
    const exercise = new Exercise({
        uname: uname || null,
        day : day || null,
        exername : exername || null,
        sets : sets || null,
        imgUrl : imgUrl || null,
        dayId : dayId || null
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

app.post("/sendmail", async (req,res)=>{
    const {mailId} = req.body;
    async function main() {
      const otp = Math.floor(Math.random() * 9000) + 1000;
  
      let testAccount = await nodemailer.createTestAccount();
    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "yashbomble2003@gmail.com", // generated ethereal user
          pass: "proccess.env.MAIL_KEY" // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"GYM" yashbomble@.com', // sender address
        to: mailId, // list of receivers
        subject: "OTP Verification ✔", // Subject line
        text: " ", // plain text body
        html: "<b>Your Otp for Mail Verification is </b>"+"<h1>"+otp+"<h1>", // html body
      });
    
      if(info)
      {
        return res.json({
          success : true,
          message : "mail sent",
          data : info.messageId
        })
      }else
      {
        return res.json({
            success : false,
            message : "Error"
        })
      }
      
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    
    main().catch(console.error);
  })
  

//api routes end here

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})