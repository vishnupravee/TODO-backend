import express from"express"
import { connectDB } from "./database.mjs"
import cors from"cors"
import dotenv from "dotenv"
import router from "./router.mjs"


dotenv.config()
const app=express()
connectDB()
app.use(express.json())
app.use('/',router)
const corsOptions={
    origin:"http://localhost:3000",
    methods:["GET","POST","DELETE"],
    Credential:true,
};
 app.use(cors(corsOptions))
app.get("/",(req,res)=>{
    res.send("<h1>server running</h1>")
   
})
const PORT=3000
app.listen(PORT,()=>console.log(`running ${PORT}`))