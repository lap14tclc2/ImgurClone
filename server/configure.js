// declare our dependencies
const path = require('path'),
    routes = require('./routes'),
    expressHandleBars = require('express-handlebars'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler');

module.exports = app => {
    // explain included  at Page 130 in book

    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ 'extended': true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser('some-secret-value-here'));
    routes(app); // moving the route to route folder

    app.use('/public/',
        express.static(path.join(__dirname, '../public')));

    if ('development' === app.get('env')) {
        app.use(errorHandler());
    }
    //regis handleBars as default View rendering engine
    app.engine('handlebars',expressHandleBars.create({
        defaultLayout: 'main',
        layoutsDir: `${app.get('views')}/layouts`,
        partialsDir: [`${app.get('views')}/partials`]
    }).engine);
    app.set('View engine','handlebars')
    return app;
}
