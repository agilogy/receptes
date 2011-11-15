App.Events = (function(lng, app, undefined) {

	lng.Dom.Event.live('#btnLogin', 'TAP', function(event) {
		var username=lng.Dom.query('#username').val();
		var password=lng.Dom.query('#password').val();

		App.Services.Auth.login(username, password, function() {
			App.Services.Recipes.findAll(function(){
				App.View.recipe_list(this);
			});
		});
	});
	lng.Dom.Event.live('#recipes li', 'TAP', function(event) {
        var recipe_id = lng.Dom.query(this).attr('id');
        App.View.recipe(recipe_id)
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