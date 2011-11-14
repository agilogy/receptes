App.Services = (function(lng, app, undefined) {

	var login = function(username, password, callback) {
		var url = '/api/0.1/auth/login';
		var data = {
		    user: username,
		    password: password
		};

		lng.Service.post(url, data, function(response) {
    		//Do something with response
		});
	}

    return {
    	login: login
    }

})(LUNGO, App);