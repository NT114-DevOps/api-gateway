require('dotenv').config();

const express = require('express');
const cors = require('cors');
// Proxy to redirect request
const proxy = require('express-http-proxy');

const app = express();
app.use(express.json());
app.use(cors());

// Redirect
app.use('/posts', proxy(process.env.POST_SERVICE));
app.use('/comments', proxy(process.env.COMMENT_SERVICE));
app.use('/auth', proxy(process.env.AUTH_SERVICE));

app.get('/', (req, res) => {
    res.send('API Gateway is running!');
})

module.exports = app;