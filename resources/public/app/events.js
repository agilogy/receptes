App.Events = (function(lng, app, undefined) {

	/** Main View **/
	lng.Dom.Event.live('#btnLogin', 'TAP', function(event) {
		var username=lng.Dom.query('#username').val();
		var password=lng.Dom.query('#password').val();

		App.Services.Auth.login(username, password, function() {
			App.Services.Recipes.findAll(function(){
				App.View.RecipeList.show(this);
			});
		});
	});
	/** Recipes List View **/
	lng.Dom.Event.live('#recipe_list_view li', 'TAP', function(event) {
        var recipe_id = lng.Dom.query(this).attr('id').substring("recipe-".length);
        var position = parseInt(recipe_id);
        App.View.Recipe.showRecipe(App.Data.recipes[position]);
    });

	lng.Dom.Event.live('#recipe_list_view header a', 'TAP', function(event) {
        App.View.edit();
    });

	lng.Dom.Event.live('#guardar', 'TAP', function(event) {
		var name = $("#form_name").val();
		var ingredients = $("#form_ingredients").val();
		var instructions = $("#form_instructions").val();
		console.log("name="+name);
        App.Services.Recipes.addNew(name, ingredients, instructions, function(event) {
        	App.View.RecipeList.show();
        });
    });

    /** Recipe View */
    lng.Dom.Event.live('#recipe footer a', 'TAP', function(event) {
        var recipe = App.View.Recipe.getShownRecipe();
        App.Services.Recipes.delete(recipe, function() {
        	App.View.RecipeList.show();
        });
    });
    return {

    }

})(LUNGO, App);