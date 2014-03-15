var express = require('express'),
	app = express();

app.set('views','tutorials');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static('public'));

app.get('/',function(req,res){
	// res.render('index');
	res.sendfile('public/index1.html');
});

app.get('/tutorial/:category', function (req, res) {
	res.redirect('/#tutorials');
});

app.get('/tutorial/:category/:topic', function (req, res) {
	if(req.params.category && res.params.topic)
		res.render(req.params.category+'/'+req.params.topic, function (err, html) {
			// if(err) return res.redirect('/#tutorials');
			if(err) console.log(err);
			else return res.send(html);
		});
	else res.redirect('/#tutorials');
});

app.listen(3000,function(){
	console.log('Ready to go on port 3000');
});
