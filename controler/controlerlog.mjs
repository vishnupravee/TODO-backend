
import user from "../schemafunction/schema.mjs";
import bcrypt from "bcrypt"
export const login = async (req, res) => {
    try {
        const { Email, password } = req.body;
        const data= await user.findOne({ Email })
        if (data) {
            if (data.Email === Email && bcrypt.compare(password,data.password)) {
                console.log("succcess");
                res.json("log in success")
            }
            else {
                res.json("log in faild")
                console.log("failed");
            }
        }
        else {
            res.json("log in faild")
            console.log("failed");
        }
    } catch (error) {
        console.log(error);
    }


}





