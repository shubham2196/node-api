var express = require('express'),
 port =5000,
 bodyParser = require('body-parser'),
 app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'Welcome to NODE API' })
});
// import Routes
var routes = require('./api/routes/studentRoutes'); //importing route
routes(app);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function () {
    console.log('Node app is running on port 5000');
});


//module.exports = app;

// app.get('/users', function (req, res) {
//     con.query('SELECT * FROM student', function (error, results, fields) {
//         if (error) throw error;
//         return res.send({ error: false, data: results, message: 'Student list.' });
//     });
// });
// set port
