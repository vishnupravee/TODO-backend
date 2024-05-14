
import User from "../modals/usermodel.mjs";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
export const login = async (req, res) => {
    try {
        const { Email, password } = req?.body;
        if(Email,password===""){
            throw new ApiError(400,"all feilds are compalsory")
        }
        const data= await User.findOne({ Email })
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

export const Schemafunction=async(req,res)=>{
    try{
        const{Name,Email,password}=req?.body;
        if(Name,Email,password===""){
            throw new ApiError(400,"all feilds are compolsary")
        }
        const value= await User.findOne({Email})
        const salt=await bcrypt.genSalt(10)
            const hashpassword=await bcrypt.hash(password,salt)
        if(!Name||!Email||!password){
            res.json("plz enter the data")
            
    }
    else if(password.length<=6){
        res.json("atleast 6 bit needed")
    }
    else if(!value){
        const userDetails=await user.create({
            Name,
            Email,
            password:hashpassword
            })
            res.json({
            Name:userDetails.Name,
            Email:userDetails.Email,
            password:userDetails.password,
            Tocken:generateTocken (userDetails.Name)
            
            })
    }
    else{
    res.json("user all ready exist")
    } 
    }
    catch (error) {
        console.log(error);
    } 
    }
    const generateTocken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'1d',
    })
    }
    