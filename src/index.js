const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes');
const app = express();

//routes(app);
//require('./routes')(app);

app.use('/static', express.static('public')); //tova e kato middleware koito tarsi dali ima daden fail v public
//app.use('/', express.static('public')); //moje i taka da se reshi problema, no taka ne e tolkova optimizirano, zashtoto vseki pat otiva i proverqva, no qvno se izpolzvat hash tablici. Moje daje i bez '/'
//app.use('/static', express.static('src/public'));  //ako public e v papka src ...

app.use(express.urlencoded({extended: false}));   //dopalnitelen gotov middleware


app.engine('hbs', handlebars.engine({
    extname: 'hbs'   //zashtoto tova razshirenie 'hbs' ne raboti za layouts and partial templates
}));


app.set('view engine', 'hbs');
app.set('views', './src/views');  //papkata root se opredelq otkade sam izvikal komandata node or nodemon
//"start": "cd ./src && nodemon index.js"


//app.get('/', homeController.index);

app.use(routes);

app.listen(5000, () => console.log('App is listening on port 5000...'));