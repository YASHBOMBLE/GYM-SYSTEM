import {Schema, model} from "mongoose"

const assignexerciseSchema = new Schema({
  ID : String,
  name : String,
  exer : String,
  amount : String
}, { timestamps: true },{Location:true})

const Assignexer = model("Assignexer", assignexerciseSchema)

export default Assignexer