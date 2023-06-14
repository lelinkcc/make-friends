const express = require('express')
const app = express()

app.use(express.json())

app.post('/submit-form', (req, res) => {
  console.log(req.body)
  res.send('Form submitted successfully!')
})

app.listen(8081, () => {
  console.log('Example app listening on port 3000!')
})