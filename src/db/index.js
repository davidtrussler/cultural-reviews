/**
 * This is currently using stubbed data in place of a database query for ease of development
 */

// require('dotenv').config(); 

// const {Client} = require('pg')

const fs = require('fs');

let results = '';

fs.readFile('./sql/reviews.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  results = data;
});

// let client = new Client({
// 	connectionString: process.env.DATABASE_URL
// });

// client.connect();

const fetchData = function(url) {
	return new Promise((resolve, reject) => {
		// let query;
		let reviews = JSON.parse(results).reviews;

		if (url.indexOf('/review/') > -1) {
			let id = parseInt(url.split('review/')[1]);
			let review = reviews.filter(review => review.id === id)[0];

			// query = 'SELECT * FROM reviews WHERE id=' + id;
			resolve(review)
		} else if (url === '/') {
			// query = 'SELECT id, title, medium, author, writer, director, venue, artist, img_thumb FROM reviews ORDER BY timestamp ASC;';
			resolve(results)
		} else {
			resolve();
		}

		// client.query(query, (err, res) => {
		// 	if (err) {
		// 		console.log('err: ', err); 
		// 		reject(err); 
		// 	} else {
		// 		resolve(res.rows);
		// 	}
		// })
	}).catch(reject => {
		console.log('reject: ', reject); 
		return reject;
	})
}

module.exports = {fetchData};
