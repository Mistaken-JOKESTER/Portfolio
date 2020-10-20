const express = require('express')
const path = require('path')

const app = express()

PORT = process.env.PORT || 3000
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) =>{
    res.render('index')
})
app.use('/contact', (req, res) =>{
    res.render('about')
})
  
app.listen(PORT, () =>{
      console.log(`app is runnign on ${PORT}`)
})