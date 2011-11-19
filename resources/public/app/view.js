App.View = (function(lng, app, undefined) {

    var Recipe = {
        getShownRecipe: function() {
            return this.recipe;
        },
	    showRecipe: function(recipe) {
            this.recipe = recipe;
    	 	$("#recipe header h1").html(recipe.name || "");
    	 	$("#ingredients").html(recipe.ingredients || "");
    	 	$("#instructions").html(recipe.instructions || "");
            lng.Router.section('recipe');
        }
    };

    var RecipeList = {
        show: function(recipes) {
            var ul = lng.Dom.query("#recipes").html('');
            for(index in recipes) {
                var recipe = recipes[index];
                ul.append('<li id="recipe-'+index+'"><a href="#"><strong>'+recipe.name+'</strong></a></li>')
            }
            lng.Router.section('recipe_list_view');
        }
    }
    var edit = function(recipe) {
        $("#form header h1").html(recipe?recipe.name:"Afegir recepta");
    	lng.Router.section('form');
    }

    return{
        RecipeList: RecipeList,
    	Recipe: Recipe,
    	edit: edit,
    }

})(LUNGO, App);