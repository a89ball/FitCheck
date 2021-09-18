// require packages
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

// initiate
const app = express();
const PORT = process.env.PORT || 3000;
const sequelize = require('./config/db');
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const sessionConfig = { 
    secret: 'super secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })

}
// set middleware
app.use(express.json());
//urlencoded returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option.
app.use(express.urlencoded({ extended: false }));
// static ets file extension fallbacks
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sessionConfig))


// set handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// map routers
//app.use('/dashboard', require('./routes/dashboard'));
//app.use('/', require('./routes/html'));

// connect server
app.listen(PORT, function () {
    console.log('Server up and running', PORT);
    sequelize.sync({
        force: false
    })
});