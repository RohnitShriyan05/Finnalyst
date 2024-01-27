const express = require("express");
const app = express();
const cors = require("cors");
const newsApiRoute = require("./routes/newsApi");


app.use(cors());
app.use("/newsApi", newsApiRoute);


app.get("/" , (req,res)=>{
    res.send("hello");
})


app.listen(8000, ()=>{
    console.log("server running on: http://localhost:8000")
})
