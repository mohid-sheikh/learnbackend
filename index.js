console.log("chai aur code");
require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>justdoartwork</h2>')
})
app.get('/instagram', (req, res) => {
  res.send('sheikh.mohid_')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please subscribe to my  intragram</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
