 import user from '../schemafunction/schema.mjs';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
 export const Schemafunction=async(req,res)=>{
try{
    const{Name,Email,password}=req.body;
    const value= await user.findOne({Email})
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



// module.exports=Schemafunction