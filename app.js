const request = require('request')

const url = 'https://api.darksky.net/forecast/341f559dfb970f33fa1d78e0ba2ee162/37.8267,-122.4233?units=si'

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degree out')
})