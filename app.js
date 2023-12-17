const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const adminRouter = require('./routers/admin');
const shopRouter = require('./routers/shop');

const app = express();

app.set('view engine', 'ejs');
// app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((req, res, next) =>{
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
})


app.listen(4000);
