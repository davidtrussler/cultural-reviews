require('dotenv').config(); 

const {Client} = require('pg'); 

let client = new Client({
	connectionString: process.env.DATABASE_URL
});

client.connect(); 

const fetchData = function(url) {
	return new Promise((resolve, reject) => {
		let query; 

		if (url.indexOf('/review/') > -1) {
			let id = url.split('review/')[1];
			query = 'SELECT * FROM reviews WHERE id=' + id;
		} else if (url === '/') {
			query = 'SELECT id, title, medium, author, writer, director, venue, artist, img_thumb FROM reviews ORDER BY timestamp ASC;';
		} else {
			resolve();
		}

		client.query(query, (err, res) => {
			if (err) {
				console.log('err: ', err); 
				reject(err); 
			} else {
				resolve(res.rows);
			}
		})
	}).catch(reject => {
		console.log('reject: ', reject); 
		return reject;
	})
}

module.exports = {fetchData};
