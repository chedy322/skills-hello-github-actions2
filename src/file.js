const express=require("express");
const app=express()
const path=require('path')
require('dotenv').config();
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
const port=process.env.PORT|| 8080;

app.get('/',(req,res)=>{
  res.render("home");
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

});