import mongoose from "mongoose"

const taskschema = mongoose.Schema({

    Task: { type: String },
    Domainname: { type: String }

})
 const Users = mongoose.model("Task", taskschema)
export default Users
