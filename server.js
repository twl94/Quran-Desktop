const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const fetch = require('node-fetch')

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('views'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/view', (req, res) => {
    let number = req.query.s;
    res.render('viewer', {number: number})
})

const serverRun = () => {
    const { port } = require('./config.json')

    app.listen(port, () => {
        console.log(`[+] Server Running in http://localhost:${port}/`)
    })
}

module.exports = serverRun;