require('dotenv').config(); 

const { Client } = require('pg'); 

let client = new Client({
	// Connect to database on main app
	connectionString: process.env.DATABASE_URL
	// Connect to database on Heroku Preview App
	// connectionString: process.env.HEROKU_POSTGRESQL_<NAME>_URL
}); 

client.connect(); 

function getAllReviews(callback) {
	console.log('getAllReviews!'); 

	const query = 'SELECT * FROM reviews ORDER BY timestamp DESC;';
	
	return new Promise((resolve, reject) => {
		client.query(query, (err, res) => {
			if (err) {
				reject(err); 
			} else {
				resolve(res.rows); 
			}
		})
	}).then((response) => {
		callback(
			{reviews: response}
		)
	}).catch(reject => {
		return reject;
	})
}

function getSingleReview(reviewId, callback) {
	console.log('getSingleReview!'); 

	const query = 'SELECT * FROM reviews WHERE id=' + reviewId;
	
	return new Promise((resolve, reject) => {
		client.query(query, (err, res) => {
			if (err) {
				reject(err); 
			} else {
				resolve(res.rows); 
			}
		})
	}).then((response) => {
		callback(
			response[0]
		)
	}).catch(reject => {
		return reject;
	})
}

module.exports = {
  getAllReviews, 
  getSingleReview
}

/*
** 
Useage: 

const db = require('./db'); 

db.getAllReviews(data => {
	console.log('data: ', data); 
});

db.getSingleReview(1, data => {
	console.log('data: ', data); 
});
**/
