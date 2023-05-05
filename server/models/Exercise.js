import {Schema, model} from "mongoose"

const exerciseSchema = new Schema({
  uname: String,
  day : String,
  exername : String,
  sets : String,
  imgUrl : String,
  price : String,
  dayId : String
}, { timestamps: true },{Location:true})

const Exercise = model("Exercise", exerciseSchema)

export default Exercise