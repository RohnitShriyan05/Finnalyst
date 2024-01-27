const router = require("express").Router();

router.get("/", (req,res)=>{
    res.send("newsApi route setup");

})


module.exports = router;