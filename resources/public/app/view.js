App.View = (function(lng, app, undefined) {

	var recipe = function(recipe) {
	 	$("#recipe header h1").html(recipe.name);
	 	$("#ingredients").html(recipe.ingredients);
	 	$("#instructions").html(recipe.instructions);
        lng.Router.section('recipe');
    };

    var edit = function(recipe) {
        $("#form header h1").html(recipe?recipe.name:"Afegir recepta");
    	lng.Router.section('form');
    }

    var recipe_list = function(recipes) {
    	var ul = lng.Dom.query("#recipes").html('');
    	for(index in recipes) {
    		//<li id="1"><a href="#" data-title="Pollastre al curry"><strong>Pollastre al curry</strong></a></li>
    		var recipe = recipes[index];
    		ul.append('<li id="recipe-'+index+'"><a href="#"><strong>'+recipe.name+'</strong></a></li>')
    	}
    	lng.Router.section('recipe_list_view');
    }
    return{
        recipe_list: recipe_list,
    	recipe: recipe,
    	edit: edit,
    }

})(LUNGO, App);