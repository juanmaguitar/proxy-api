const request = require('request')
const cors = require('cors')
const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

const URL_BASE = 'https://comicvine.gamespot.com/api'

const options = {
  headers: {
    'User-Agent': 'request'
  }
}

const cache = {}
let counter = 0

app.use(cors())

app.get('*', function (req, res) {
  const urlRequested = req.originalUrl
  console.log('requesting: ' + urlRequested)
  if (urlRequested.includes('favicon.ico')) {
    res.status(500).send("Couldn't get a JSON!")
    return
  }

  options.url = URL_BASE + urlRequested

  console.log(options.url)
  console.log('attempt...')
  console.log(++counter)

  if (cache[options.url]) {
    console.log('from cache...')
    res.json(cache[options.url])
  } else {
    console.log('🔥 requesting: ' + options.url)
    request(options, function (error, response, body) {
      if (error) res.status(500).send('Something went wrong!')
      try {
        console.log('trying to PARSE...')
        const parsedResult = JSON.parse(body)
        cache[options.url] = parsedResult
        console.log('from fresh request...')
        res.json(parsedResult)
      } catch (e) {
        res.status(500).send("Couldn't get a JSON!")
      }
    })
  }
})

app.listen(PORT, () => console.log(`listening on port ${PORT}...`))

