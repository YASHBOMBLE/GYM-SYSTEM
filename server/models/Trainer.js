import {Schema, model} from "mongoose"

const trainerSchema = new Schema({
  name: String,
  class : String,
  phone : String
}, { timestamps: true },{Location:true})

const Trainer = model("Trainer", trainerSchema)

export default Trainer