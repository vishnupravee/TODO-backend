import mongoose from "mongoose"

const userschema = mongoose.Schema({

    Email: { type: String },
    password: { type: String },
    Name: { type: String }
})

  const user = mongoose.model("user", userschema)

export default user
