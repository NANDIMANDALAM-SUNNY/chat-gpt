var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const {Configuration, OpenAIApi} = require('openai')




var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler

const configuration = new Configuration({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.API_KEY
})
const openai = new OpenAIApi(configuration)

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


module.exports = app;
