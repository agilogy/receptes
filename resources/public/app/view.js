App.View = (function(lng, app, undefined) {

	 var recipe = function(id) {
        /*lng.Data.Sql.select('todo', {id:id}, function(result){
            if (result.length > 0) {
                var data = result[0];
                lng.Data.Cache.set('current_todo', data);

                $('#txtEditName').val(data.name);
                $('#txtEditDescription').val(data.description);
                $('#txtEditName').val(data.name);

                lng.Router.section('view');
            }
        });*/
        lng.Router.section('recipe');
    };

    var edit = function() {
    	lng.Router.section('form');
    }

    var recipe_list = function(recipes) {
    	var ul = lng.Dom.query("#recipes").html('');
    	for(index in recipes) {
    		//<li id="1"><a href="#" data-title="Pollastre al curry"><strong>Pollastre al curry</strong></a></li>
    		var recipe = recipes[index];
    		ul.append('<li id="'+recipe.name+'"><a href="#"><strong>'+recipe.name+'</strong></a></li>')
    	}
    	lng.Router.section('recipe_list');
    }
    return{
    	recipe: recipe,
    	edit: edit,
    	recipe_list: recipe_list
    }

})(LUNGO, App);