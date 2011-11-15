App.Events = (function(lng, app, undefined) {

	lng.Dom.Event.live('#btnLogin', 'TAP', function(event) {
		console.log(lng.Dom.query('#username'));
		var username=lng.Dom.query('#username').val();
		var password=lng.Dom.query('#password').val();

		App.Services.login(username, password, function() {
			App.View.recipe_list();			
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