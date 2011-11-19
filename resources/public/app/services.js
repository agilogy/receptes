App.Services = (function(lng, app, undefined) {


	var request = function(method, uri, data, callback, error ) {
		$.ajax({
            type: method,
            url: uri,
            data: data,
            dataType: 'json',
            success: function(response) {
                if (lng.Core.toType(callback) === 'function') {
                    setTimeout(callback, 100, response);
                }
            },
            error: function(xhr, type) {
                if (error) {
                    setTimeout(error, 100, result);
                }
            },
            headers: { "Authorization": localStorage["auth-token"] || ""}
        });
	}

	var Auth = {
		login: function(username, password, callback) {
			var data = {
			    username: username,
			    password: password
			};
			request('POST', '/auth/token', data, function(response) {
	    		if(response.token) { //Auth is ok
	    			localStorage["auth-token"] = response.token;
	    			callback.call();
	    		}
			});
		},
		isLoggedIn: function() {
			return localStorage["auth-token"] != undefined;
		}
	};

	var Recipes = {
		findAll: function(callback) {
			request('GET', '/recipes/', null, function(response){
				App.Data.recipes = response;
				callback.call(response);	
			})
		},
		addNew: function(name, ingredients, instructions, callback) {
			var data= {
				name: name,
				ingredients: ingredients,
				instructions: instructions
			}
			request('POST', '/recipes/', data, function(response){
				callback.call(response);	
			});
		},
		delete: function(recipe, callback) {
			//App.Data.recipes.remove({_id:recipe._id})
			request('DELETE', '/recipes/'+recipe._id, function(response) {
				callback.call(response);
			})
		}
	}
	

    return {
    	Auth: Auth,
    	Recipes: Recipes
    }

})(LUNGO, App);