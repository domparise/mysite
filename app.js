var express = require('express'),
	app = express();

app.set('views','views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static('public'));

app.get('/',function(req,res){
	res.render('index');
});

app.listen(3000,function(){
	console.log('Ready to go on port 3000');
});