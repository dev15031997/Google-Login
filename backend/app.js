require('dotenv').config();
const express=require('express')
const app=express();
const cors=require('cors')
require('./Db/conn')

let port=process.env.PORT || 5000;

app.use(cors({
    origin:'http://localhost:3000',
    methods:'GET,POST,PUT,DELETE',
    credentials:true
}))

app.use(express.json())


app.listen(port,()=>{
    console.log(`Server working at port ${port}`)
})