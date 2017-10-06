/**
 *  Node Server with ExpressJS and MongoDB
 */

var express = require('express'),
    router = require('./route'),

    morgan = require('morgan')
    app = express(),
    port = process.env.PORT || 3003;

// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => {
    console.log('Server Listening [at] http://localhost:3003');
});