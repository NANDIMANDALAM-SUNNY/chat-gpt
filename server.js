import express from 'express'

import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
const PORT = process.env.PORT || 8000


app.get('/',(req,res)=>{
  res.send("Hello")
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT} `)
  })