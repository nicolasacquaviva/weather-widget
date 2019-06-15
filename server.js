const express = require('express')
const app = express()

app.use(express.static(__dirname))

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: __dirname })
})

app.listen(3000, () => {
  console.log('Express server running on 3000')
})
