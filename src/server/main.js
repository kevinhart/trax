var express = require('express');
var path = require('path');
var echonest = require('./echonest');

var app = express();
app.use('/', express.static(path.join(__dirname, 'public')));

var errorHandler = function errorHandler(res) {
    return function (err) {
        res.status(500).send('ERROR: ' + err);
    };
};

app.get('/api/song/details', function (req, res) {
    echonest
        .songDetails({ title: req.query.title, artist: req.query.artist })
        .then(res.send.bind(res))
        .catch(errorHandler(res));
});

app.listen(3000);