import express from "express";
import config from "./configs/config"
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(config.serverPort,()=>{
    console.log("Server is running on port", config.serverPort);
})


