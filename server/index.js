const express = require("express");
const app = express();
const cors = require("cors");
const newsApiRoute = require("./routes/newsApi");


app.use(cors());
app.use("/newsApi", newsApiRoute);


app.get("/" , (req,res)=>{
    res.send("hello");
})

var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NVDA&interval=5min&apikey=7MD0IF5H889QIZ0C';

app.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      console.log(data);
    }
});
app.listen(8000, ()=>{
    console.log("server running on: http://localhost:8000")
})
