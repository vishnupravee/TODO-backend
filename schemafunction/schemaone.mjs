import mongoose from "mongoose"

const userschema = mongoose.Schema({

    Task: { type: String },
    Domainname: { type: String }

})
 const users = mongoose.model("tasc", userschema)
export default users
