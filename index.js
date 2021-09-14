const express = require('express');
var session = require('express-session')
const app = express();
const exphbs  = require('express-handlebars');
const helperfunction = require('./perfect-pizza');
const helperfunc = helperfunction();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))

app.get('/', function(req, res){
	res.render('index');
});
// add your routes here...
app.post('/addToCart', function(req, res){

	res.render('index', {
		result: helperfunc.addToCart(req.body.button)
	});
});
//a get route to show a list of pizzas
app.get('/pizzas', function(req, res) {
	res.render("pizza/index");
});
//a get route that contains a form - that posts to /pizza/add/
app.post('/pizza/add', function(req, res) {
	res.redirect("/pizzas");
});
//a post route for now let is redirect to the /pizzas get route.
app.get('/pizza/add/', function(req, res){
	res.render('pizza/add');
});
//a get route for editing pizzas - for now display 
//the id passed into the route in the template. Post to /pizzas/edit.
app.get('/pizza/edit/:pizza_id', function(req, res){
	res.render('/pizzas/edit');
});
//a post route for updating a pizza - 
//for now display the id passed into the route in the template. Redirect to /pizzas for now.
app.post('/pizza/edit', function(req, res) {
	res.redirect("/pizzas");
});
app.post('/pizza/modify', function(req, res) {
	res.render('pizza/viewcart', {
		result: helperfunc.modifyVals(req.body.button)
	});
});

app.get('/viewcart', function(req, res) {
	var grandTotal = helperfunc.grandTotal();
	if (!req.session.grandTotal) {
		req.session.grandTotal = {due: true, Id:1, total:grandTotal}
	} else {
		req.session.grandTotal = {Id:req.session.grandTotal.Id, due:req.session.grandTotal.due, total:grandTotal}
		
	}
	//console.log(req.session.grandTotal);
	res.render('pizza/viewcart', {
		result: helperfunc.cartTotals(),
		sess: req.session.grandTotal,
	});
});

app.get('/pay', function(req, res) {
	var grandTotal = helperfunc.grandTotal();
	if (!req.session.grandTotal) {
		req.session.grandTotal = {Id:req.session.grandTotal.Id, due:req.session.grandTotal.due, total:grandTotal, paid:true}
	} else {
		req.session.grandTotal = {Id:req.session.grandTotal.Id, due:req.session.grandTotal.due, total:grandTotal, paid:req.session.grandTotal.paid}
	}
	res.render('pizza/viewcart', {
		sess: req.session.grandTotal
	});
	//console.log(req.session.grandTotal);
});

app.get('/paid', function(req, res) {
	var grandTotal = helperfunc.grandTotal();
	if (!req.session.grandTotal) {
		req.session.grandTotal = {due: true, Id:1, total:grandTotal}
	} else {
		req.session.grandTotal = {Id:req.session.grandTotal.Id, total:grandTotal}
	}
	res.render('pizza/viewcart', {
		sess: req.session.grandTotal
	});
});

app.get('/checkout', function(req, res) {
	res.render('pizza/order', {
		result: req.session.grandTotal,
	});
});

const PORT = process.env.PORT || 7008;
app.listen(PORT, function(){
	console.log('started');
});

