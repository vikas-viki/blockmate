const express = require('express');
var cors = require('cors');
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/v1', require('./upload.js'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});