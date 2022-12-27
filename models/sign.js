const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure)
const SignUpSchema = new Schema({
  username: String,
  email: String,                       
  password: String,
  day:Number,
  month:Number,
  year:Number
});
 
 
// Create a model based on that schema
const SignUp = mongoose.model("SignUp", SignUpSchema);
 
 
// export the model to use it in other files. 
module.exports = SignUp; 
