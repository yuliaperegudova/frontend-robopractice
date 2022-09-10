const express = require('express')
const app = express()
const cors = require('cors');
const port = 8080

app.get('/api/users', cors(), (req, res) => {
  res.send(
      require('./data.json')
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
