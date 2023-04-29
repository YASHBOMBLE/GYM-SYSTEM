import {Schema, model} from "mongoose"

const userSchema = new Schema({
  userid : String,
  name: String,
  email: String,
  phone: String,
  password: String,
  weight : String,
  age : String,
  role: String,
}, { timestamps: true },{Location:true})

const User = model("User", userSchema)

export default User