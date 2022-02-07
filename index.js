const express = require('express');
const router = require('./routers');

const { connectToDb } = require('./database/index');

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(router);
app.use('/assets', express.static('assets'));

connectToDb();

app.listen(5001, () => {
    console.log('App is running at 5001');
});