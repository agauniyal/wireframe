var express = require('express'),
    path = require('path'),
    app = express(),
    port = 8888;

/* basic configuration */
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine','jade');

/*set basic routing for static files */
app.use(express.static( path.join(__dirname, '/public') ));

app.listen(port,function() {
    console.log('Wireframes is running on  '+port+' port');
});