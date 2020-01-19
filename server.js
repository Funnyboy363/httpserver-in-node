// const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var querystring = require("querystring");
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const courses = [
    { id: 1, name: 'Thor', className: 'Rich Internet Applications II'},
    { id: 2, name: 'Landon', className: 'Web Frameworks II'},
    { id: 3, name: 'Daniel', className: 'Senior Capstone II'},
    { id: 4, name: 'Mike', className: 'Digital Product Design II'},
    { id: 5, name: 'Paul', className: 'Web Content Management'},
   ];
   

   app.get('/api', (req, res) => {   
    
     res.send([courses]);
    
});



app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'styling')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
    next();
});


app.listen(5000);