const express = require('express');

const app = express();
const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

// add your routes here...
app.get('/', function(req, res){
	res.render('index');
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
const PORT = process.env.PORT || 7008;
app.listen(PORT, function(){
	console.log('started');
});