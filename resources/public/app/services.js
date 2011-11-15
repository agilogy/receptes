App.Services = (function(lng, app, undefined) {

	var login = function(username, password, callback) {
		var url = '/api/0.1/auth/login';
		var data = {
		    username: username,
		    password: password
		};
		console.log("about to try the login (" + username + ")");
		lng.Service.post(url, data, function(response) {
    		if(response.token) { //Auth is ok
    			localStorage["auth-token"] = response.token;
    			callback.call();
    		}
		});
	}

	var isLoggedIn = function() {
		return localStorage["auth-token"] != undefined;
	}

    return {
    	login: login,
    	isLoggedIn: isLoggedIn
    }

})(LUNGO, App);