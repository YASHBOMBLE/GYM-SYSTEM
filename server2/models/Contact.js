import {Schema, model} from "mongoose"

const contactSchema = new Schema({
    name : String,
    email : String,
    message : String

}, { timestamps: true },{Location:true})

const Contact = model("Contact", contactSchema)

export default Contact