import users from "../schemafunction/schemaone.mjs"

 export const posttaskfunction=async(req,res)=>{

    
    const{Task,Domainname}=req.body;
    
    try{
    const userDetails=await users.create({
        Task,
        Domainname
        
      

        })
        res.json( userDetails)
    }
    catch(error){
     console.log(error)
    }
}


