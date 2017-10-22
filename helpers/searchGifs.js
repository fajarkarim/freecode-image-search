
// var axios = require('../config/axios-config')
const axios = require('axios')

function searchGifs (q, offset, limit) {
  console.log('halloooo')
  console.log(process.env.API_KEY)
  console.log(q)
  return axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      api_key: process.env.API_KEY,
      q: q,
      offset: offset,
      limit: limit
    }
  })  
}

module.exports = searchGifs
