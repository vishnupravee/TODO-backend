import mongoose from "mongoose"

const userschema = mongoose.Schema({

    Email: { type: String },
    password: { type: String },
    Name: { type: String }
})

  const User = mongoose.model("Users", userschema)

export default User
