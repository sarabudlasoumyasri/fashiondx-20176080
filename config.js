/**
 * localhost:27017 = server:port, default port is 27017, port value is optional
 * test = our database name
 * 


 */ 

var config = {
	database: {
		url: 'mongodb://localhost:27017/test'
	},
	server: {
		host: '127.0.0.1',
		port: '5555'
	}
}

module.exports = config
