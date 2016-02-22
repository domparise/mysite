var express = require('express'),
    dom_app = express(),
    confertia_app = express(),
    app = express(),
    vhost = require('vhost');

dom_app.set('views','tutorials');
dom_app.set('view engine', 'jade');
dom_app.use(express.logger('dev'));
dom_app.use(express.json());
dom_app.use(express.urlencoded());
dom_app.use(express.methodOverride());
dom_app.use(express.static('public'));

dom_app.get('/',function(req,res){
    res.sendfile('public/index1.html');
});

// handle domain names
app.use(vhost('domparise.com', dom_app));
app.use(vhost('*.domparise.com', dom_app));
app.use(vhost('domparise.tech', dom_app));
app.use(vhost('*.domparise.tech', dom_app));

// handle confertia prototype
confertia_app.use(express.static('confertia'));

app.use(vhost('confertia.com', confertia_app));
app.use(vhost('*.confertia.com', confertia_app));

app.listen(3000,function(){
    console.log('Ready to go on port 3000');
});
