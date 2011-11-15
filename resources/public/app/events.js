App.Events = (function(lng, app, undefined) {

	lng.Dom.Event.live('#btnLogin', 'TAP', function(event) {
		var username=lng.Dom.query('#username').val();
		var password=lng.Dom.query('#password').val();

		App.Services.Auth.login(username, password, function() {
			App.Services.Recipes.findAll(function(){
				App.Data.recipes = this;
				App.View.recipe_list(this);
			});
		});
	});
	lng.Dom.Event.live('#recipes li', 'TAP', function(event) {
        var recipe_id = lng.Dom.query(this).attr('id').substring("recipe-".length);
        console.log("About to show recipe " + recipe_id);
        var position = parseInt(recipe_id);
        App.View.recipe(App.Data.recipes[position]);
    });

	lng.Dom.Event.live('#recipes_view a[href="#add"]', 'TAP', function(event) {
        App.View.edit()
    });

	lng.Dom.Event.live('#guardar', 'TAP', function(event) {
        alert("guardar");
    });
    return {

    }

})(LUNGO, App);