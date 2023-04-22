const PORT = 8008
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
require("dotenv").config()
app.use(express.json());
app.use(cors());

const API_KEY = process.env.API_KEY;

app.post("/completions",(req, res) => {
    try {
        axios({
            method: "post",
            url:"https://api.openai.com/v1/chat/completions",
            data: {
                model: "gpt-3.5-turbo", 
                messages:[{role:"user", content: req.body.message}],
                max_tokens:100
            },
            headers: {
                "Authorizations": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            }
        }).then(function(response){
            const data = response.data;
        })
    } catch (error) {
        console.log(error);
    }
});
app.listen(PORT,()=>{
    console.log("be running port "+PORT);
})