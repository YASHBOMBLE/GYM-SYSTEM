import {Schema, model} from "mongoose"

const trainerSchema = new Schema({
  name: String,
  category : String,
  phone : String,
  email : String
}, { timestamps: true },{Location:true})

const Trainer = model("Trainer", trainerSchema)

export default Trainer