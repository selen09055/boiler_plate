const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hyeon09055:1@myapp.lntxd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>console.log("success")).catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})