const express =  require ('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port =process.env.PORT || 8000;

// public static path

const static_path=  (path.join(__dirname, "../public"));
const Temp_path=  (path.join(__dirname, "../Temp/views"));
const partials_path=  (path.join(__dirname, "../Temp/partials"));

app.set('view engine', 'hbs');
app.set('views',Temp_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));



app.get("",(req, res)=>{

    res.render("index")
})
app.get("/about",(req, res)=>{

    res .render("about")
})
app.get("/weather",(req, res)=>{

    res .render("weather")
})
app.get("*",(req, res)=>{

    res .render('404error',{
        errorMsg: 'oops ! page Not Found'
    })
})



app.listen( port ,() => {
    console.log(` listening to the port at  ${ port} `)

})