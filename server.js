import express from "express";

import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname=dirname(fileURLToPath(import.meta.url));

const app= express();
const pass="Self-realization";
const port = 3000;

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended:true}));

function checkPass(req,res,next){
    // console.log(req.body);
    if (req.body["password"]===pass){
        res.sendFile(__dirname+"/index1.html");
    

        
    }
    else{
        res.send("Sorry , You are not authorized");
    }
    next();
}
// app.use(checkPass());


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});

// app.post("/submit", (req,res)=>{
//     console.log(req.body);
//     app.use(checkPass);
    
    

// })

app.post("/submit", checkPass, (req, res) => {
    console.log(req.body);
  });



app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});
