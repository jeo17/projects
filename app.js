const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const Wallpaper = require('./models/wallpaper');
const SignUp = require("./models/sign");
const imageMimeTypes = ["image/jpeg", "image/png", "images/gif"];


// DATABASE CONNECTION
mongoose.connect("mongodb+srv://jeo:dh.jl2002@cluster0.kwlkqhx.mongodb.net/?retryWrites=true&w=majority")
const db = mongoose.connection;
db.once('error', (err)=>{
    console.log(err);    
});
db.on("open", ()=>{
    console.log("database connection success");
})



app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
app.use(express.urlencoded({ extended: true }));






  app.get("/", async (req, res, next) => {
    try{
      const wall  = await Wallpaper.find();
      const accounts = await SignUp.find();
      res.render("wallpaper", {
        wall,
        accounts
      });
    }
    catch (err){
      console.log("err: "+ err); 
    }          
    
    
  });

  
  app.get('/login', (req, res) => {
    res.send('username and password !')
  })
  
 


  app.post('/add', async ( req, res, next)=>{
   const {name, img} = req.body;
    const wallpaper = new Wallpaper({
      name
    });
    // SETTING IMAGE AND IMAGE TYPES
    saveImage(wallpaper, img);
    try{
      const newWallpaper = await wallpaper.save();
      console.log(newWallpaper);  
      res.redirect('/')  ;
    }catch (err){
      console.log(err);    
    }
  });


  app.post("/sign-up", (req, res) => {
    const signup = new SignUp(req.body);
   
    console.log(req.body);
  
  //promise method (save-then-catch)
  
   signup
      .save( )
      .then( result => {
        res.redirect("/");
      })
      .catch( err => {
        console.log(err);
      });
  }); 




  /*app.delete("/", (req, res)=> {
    wall.findByIdAndDelete(req.params.id)
  .then((params)=> {
      res.json( {mylink: "/"} );
    })
   .catch((err)=> {
      console.log(err);
    });
  });*/
  





   function saveImage(wallpaper, imgEncoded) {
    // CHECKING FOR IMAGE IS ALREADY ENCODED OR NOT
    if (imgEncoded == null) return;
  
    // ENCODING IMAGE BY JSON PARSE
    // The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string
    const img = JSON.parse(imgEncoded);
    console.log( "JSON parse: "+ img);
    
    // CHECKING FOR JSON ENCODED IMAGE NOT NULL 
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
    // AND HAVE VALID IMAGE TYPES WITH IMAGE MIME TYPES
    if (img != null && imageMimeTypes.includes(img.type)) {
  
      // https://nodejs.org/api/buffer.html
      // The Buffer class in Node.js is designed to handle raw binary data. 
      // SETTING IMAGE AS BINARY DATA
      wallpaper.img = new Buffer.from(img.data, "base64");
      wallpaper.imgType = img.type;
    }
  }


  
 /*app.use( (req, res) => {
    res.redirect(301,'/login')
  })*/

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
