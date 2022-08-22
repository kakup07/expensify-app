const express = require('express');
const path = require('path')
const app = express();

// const publicPath = path.join(__dirname, '..', 'public')
// app.use(express.static(publicPath));

app.get('/api', (req, res) => {
    res.json({message: "Hello from Server!"})
});

app.listen(process.env.PORT || 3001, () => {
    console.log('server is up!')
});