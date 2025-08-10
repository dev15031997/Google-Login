require('dotenv').config();
const express=require('express')
const app=express();
const cors=require('cors')

let port=process.env.PORT || 5000;

app.use(cors({
    origin:'http://localhost:5173',
    methods:'GET,POST,PUT,DELETE',
    credentials:true
}))


app.listen(port,()=>{
    console.log(`Server working at port ${port}`)
})