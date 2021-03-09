require('dotenv').config(); 

const {Client} = require('pg'); 

let client = new Client({
	// Connect to database on main app
	connectionString: process.env.DATABASE_URL
	// Connect to database on Heroku Preview App
	// connectionString: process.env.HEROKU_POSTGRESQL_<NAME>_URL
});

client.connect(); 

const fetchData = function(url) {
	return new Promise((resolve, reject) => {
		let query; 

		if (url.indexOf('/review') === 0) {
			let id = url.split('review/')[1];
			query = 'SELECT * FROM reviews WHERE id=' + id;

			console.log('query: ', query); 
		} else if (url === '/') {
			query = 'SELECT id, title, medium FROM reviews ORDER BY timestamp ASC;';
		} else {
			resolve(); 
		}

		client.query(query, (err, res) => {
			if (err) {
				console.log('err: ', err); 
				reject(err); 
			} else {
				// console.log('res: ', res);
				resolve(res.rows);
			}
		})
	}).catch(reject => {
		console.log('reject: ', reject); 
		return reject;
	})
}

module.exports = {fetchData};
