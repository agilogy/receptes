App.Events = (function(lng, app, undefined) {

	lng.Dom.Event.live('#recipes li', 'TAP', function(event) {
        var recipe_id = lng.Dom.query(this).attr('id');
        App.View.recipe(recipe_id)
    });

    return {

    }

})(LUNGO, App);