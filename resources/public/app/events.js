App.Events = (function(lng, app, undefined) {

	lng.Dom.Event.live('#btnLogin', 'TAP', function(event) {
		App.Services.login("jose", "jose");
	})
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