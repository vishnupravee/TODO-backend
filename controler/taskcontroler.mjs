import Users from "../modals/taskmodel.mjs"

 export const posttaskfunction=async(req,res)=>{

    
    const{Task,Domainname}=req.body;
    
    try{
    const userDetails=await Users.create({
        Task,
        Domainname
        
      

        })
        res.json( userDetails)
    }
    catch(error){
     console.log(error)
    }
}


export const getfunction = async (req, res) => {
try {
        const event = await Users.find()

        res.json(event)
    } catch (error) {
        console.log(error);
    }
}

export const normalfunction=async(req,res)=>{
    console.log("IN THIS FUNCTION")
       console.log(req.params)
    
    
       const id=req.params.id
        // console.log(id)
        try {
          const gate=await Users.findByIdAndDelete(id)
          console.log(gate);
          
          if(!gate) return res.json("No item deleted")
          
          return  res.json("item deleted")
          
        } catch (error) {
          console.log(error)
          return res.json("Error while deleting")
        }
     
       
    }