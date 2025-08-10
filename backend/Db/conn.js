const mongoose=require('mongoose')

mongoose.connect(process.env.DB).then(()=>{
    console.log('Connection with DB successful')
}).catch((err)=>{
    console.log("connection with DB failed")
})

