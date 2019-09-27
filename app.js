const request = require('request')

const url = 'https://api.darksky.net/forecast/341f559dfb970f33fa1d78e0ba2ee162/37.8267,-122.4233?units=si'

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service!')
  } else if (response.body.error) {
    console.log('Unable to find location!')
  } else {
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degree out')
  }
})


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGF0cmlja3llIiwiYSI6ImNrMHo4YTV3NzBuam8zbW1paGxqbWZjb2IifQ.2D2PNaT1yiSttwF2KLOhVQ&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location service!')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location!')
  } else {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(latitude, longitude)
  }
})