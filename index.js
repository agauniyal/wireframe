var express = require('express'),
    sassMiddleware = require('node-sass-middleware'),
    path = require('path'),
    app = express(),
    port = 8888;


app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine','jade');


app.use(express.static(path.join(__dirname, 'public')));
app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public/stylesheets'),
    debug: true,
    outputStyle: 'compressed'

}));
app.use(express.static( path.join( __dirname, 'public' ) ) );




app.get('/viewport/:viewport', function (req, res) {
    // res.send('viewports/' + req.params.viewport)
    res.render('viewports/' + req.params.viewport, {
        title: 'Wireframes made easy for ' + req.params.viewport
    })
})


app.listen(port,function() {
    console.log('Wireframes is running on  '+port+' port');
});






