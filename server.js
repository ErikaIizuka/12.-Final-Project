const express = require('express');
const bodyParser = require('body-parser'); 
const request = require('request');

const app = express()
const apiKey = '********************************' 

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) 
{
  res.render('index', {weather: null, error: null});
})

app.post('/ajax', function (req, res) 
{
  var city = req.body.city;　
  var prefecture = req.body.prefecture; 
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`　

  request(url, function (err, response, body) 
  { 
    if(err)
    {
      res.send('Please choose an area!');　
    } else 
    {
      let weather = JSON.parse(body) 
      if(weather.main == undefined)
      {
        res.send('Please choose an area!');
      } 
      else 
      {
        res.send('Current temperature in ' + prefecture + ' is ' + JSON.stringify(weather.main.temp)+' celsius!'); 
      }
    }
  });
});


app.listen(process.env.PORT || 8080, function () 
{ 
  console.log('Example app listening on port 8080!')
})