const express=require('express');
const app=express();
const path =require('node:path');
const cors = require('cors');
const dotenv=require('dotenv');
dotenv.config();
const PORT=process.env.PORT||6060;
app.use(cors());
app.use(express.static(path.join(__dirname,'./frontend/build')));
app.get('*',(req,resp)=>{
    console.log("wokring");
    try{
    resp.sendFile(
        path.join(__dirname,'./frontend/build/index.html'),
        function (err){
            resp.status(500).send(err)
        }    
    )
}catch(err){
    console.log("error occured"+err);
}
});
app.listen(PORT,()=>{
    console.log("serveris started on port:6060");
})