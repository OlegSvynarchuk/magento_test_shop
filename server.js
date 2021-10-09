const express = require('express')
const path = require('path')
const app = express()


app.use(express.json())

app.use('/', require('./routes/getproducts.js'))
app.use(express.static('public'));
app.get('*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, 'public/index.html'));                               
  });


app.listen(4000, function() {
    console.log('magento app is running')
})