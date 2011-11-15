App.Services = (function(lng, app, undefined) {


	var request = function(method, module, resource, data, callback, error ) {
		$.ajax({
            type: method,
            url: '/api/0.1/'+module+'/'+resource,
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
            headers: { "X-Auth-Token": localStorage["auth-token"]}
        });
	}

	var Auth = {
		login: function(username, password, callback) {
			var data = {
			    username: username,
			    password: password
			};
			request('POST', 'auth', 'login', data, function(response) {
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
			request('GET', 'recipes', 'find', null, function(response){
				callback.call(response);	
			})
		}
	}
	

    return {
    	Auth: Auth,
    	Recipes: Recipes
    }

})(LUNGO, App);