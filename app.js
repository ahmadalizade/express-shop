const express = require('express');
const app = express();
const userRoutes = require('./Routes/user');
const adminRoutes = require('./Routes/admin');
const path = require("path");
const {mongoConnect} = require("./Utils/database");


app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname , 'Public')))

app.set('views' , 'Views');
app.set('view engine' , 'ejs');

app.use(userRoutes);
app.use('/admin' , adminRoutes);

app.use((req, res) => {
    res.status(404).render('404')
})

mongoConnect(() => {
    app.listen(7000)
})