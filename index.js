var express = require('express'),
    sassMiddleware = require('node-sass-middleware'),
    path = require('path'),
    app = express(),
    port = 8888;



app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine','jade');
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);

// notice that the following line has been removed
// app.use(express.static(__dirname + '/public'));

// adding the sass middleware

app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/min'  // Where prefix is at <link rel="stylesheets" href="min/style.css"/>
}));

// The static middleware must come after the sass middleware
app.use(express.static( path.join( __dirname, 'public' ) ) );




app.get('/viewport/:viewport', function (req, res) {
    // res.send('viewports/' + req.params.viewport)
    res.render('viewports/' + req.params.viewport, {
        title: 'Wireframes made easy'
    })
})


app.listen(port,function() {
    console.log('Wireframes is running on  '+port+' port');
});






