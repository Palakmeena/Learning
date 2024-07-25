// http://localhost:3000/twitter

//This is Application
//Now we have to deploy it
//application to production mein le jaana hai
//Deployement => crypro mining 
//digital ocean
//heroku
//railway
//seenode
//render
//cyclic
//AWS
//git ssh setup foe windows

require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('palakmeena13')
})

app.get('/youtube',(req,res)=>{
  res.send("<h2>Chai or code</h2>")
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})