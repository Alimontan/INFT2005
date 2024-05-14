let express = require('express');
let app = express();
let path = require('path');

app.use('/', express.static('src'))

app.listen(8080);