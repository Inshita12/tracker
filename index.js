const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(7001, function (err) {
    if (err) {
        console.log(`Error in running the server`);
    }
    console.log(`Server is running on port`);
});