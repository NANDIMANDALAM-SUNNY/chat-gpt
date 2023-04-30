import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import env from 'dotenv'
import {Configuration, OpenAIApi} from 'openai'
import logger from 'morgan'
env.config()



const app = express()
app.use(cors())
app.use(bodyParser.json())




app.use(logger('dev'));

const configuration = new Configuration({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.API_KEY
})
const openai = new OpenAIApi(configuration)

const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
  console.log(`listening on port ${PORT} `)
})

app.get('/',(req,res)=>{
  res.send("Hello")
})

app.post('/chat', async (req, res)=>{
  const {userChat} = req.body
// console.log(userChat)
  try{
      const response = await openai.createCompletion({
          model: "text-davinci-002",
          prompt: `${userChat}`,
          max_tokens: 200,
          temperature: .5
      })
      
    //   const response = await openai.createImage({
    //     prompt: "a white siamese cat",
    //     n: 1,
    //     size: "1024x1024",
    //   });
    //   image_url = response.data.data[0].url;
    // res.status(200).json({ photo: image_url });
      res.json({message: response.data.choices[0].text})

  }catch(e){
      console.log(e)
      res.send(e).status(400)
  }
})

// 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

// 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