// require packages
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// initiate
const app = express();

// set middleware
app.use(express.json());
//urlencoded returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option.
app.use(express.urlencoded({ extended: false }));
// static ets file extension fallbacks
app.use(express.static(path.join(__dirname, 'public')));


// set handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// map routers
app.use('/dashboard', require('./routes/dashboard'));
app.use('/', require('./routes/html'));

// connect server
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('Server up and running', PORT);
});