import mongoose from "mongoose";
const clubLoginSchema = mongoose.Schema({
  name:{
    type:String
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});
const clubLogin = mongoose.model("clublogin", clubLoginSchema);
export default clubLogin;
