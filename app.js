const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const adminRouter = require('./routers/admin');
const shopRouter = require('./routers/shop');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRouter.router);
app.use(shopRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) =>{
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})

// const server = http.createServer(routes.handler);
const server = http.createServer(app);

server.listen(4000);
