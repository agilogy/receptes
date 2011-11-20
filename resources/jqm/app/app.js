
var App = (function($) {
	var Db = {
		receptes: [	{nom:"Pollastre al Curry", 
				ingredients: "Pollastre i Curry",
				instruccions: "Posar curry al pollastre"},
				{nom:"Amanida de tomàquet amb mozzarella",
				ingredients: "Tomàquet i mozzarella",
				instruccions: "Posar mozzarella al tomàquet"}],
		receptaActiva: undefined
	}

	$("#recipeListView").live('pagebeforeshow', function() {
		var recipes = Db.receptes;
		Db.receptaActiva = undefined;
		function generateOnClick(index) {
			return function() {
				Db.receptaActiva = index;
				$.mobile.changePage($("#recipeView"));
			}
		}
		$("#recipeList").html("");
		for(i in recipes) {
			var link = $('<a href="#recipeView">'+recipes[i].nom+'</a>');
			link.click(generateOnClick(i));
			var li = $('<li></li>').append(link);
			$("#recipeList").append(li);
		}
		$("#recipeList").listview('refresh');
		$.mobile.changePage($("#recipeListView"));
	});
	$("#recipeView").live('pagebeforeshow', function() {
		var recepta = Db.receptes[Db.receptaActiva];
		$("#recipeView h1").html(recepta.nom)
		$("#recipeView span.ingredients").html(recepta.ingredients);		
		$("#recipeView span.instruccions").html(recepta.instruccions);
	});

})($);