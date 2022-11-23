const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(express.static('public'))



app.get('/', (req, res) => {

    res.render("wallpaper")
  })
  
  app.get('/login', (req, res) => {
    res.send('put your username and password !')
  })
  
  app.use( (req, res) => {
    res.redirect(301,'/login')
  })
  


  //for DB
 

  //connect to database




  
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  