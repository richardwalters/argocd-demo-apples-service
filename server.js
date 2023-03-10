const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({
    name: "apples service",
    env: process.env.ENV
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
