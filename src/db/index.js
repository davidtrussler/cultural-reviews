require('dotenv').config(); 

const { Client } = require('pg'); 

let client = new Client({
	// Connect to database on main app
	connectionString: process.env.DATABASE_URL
	// Connect to database on Heroku Preview App
	// connectionString: process.env.HEROKU_POSTGRESQL_<NAME>_URL
}); 

client.connect(); 

function fetchData() {
	return new Promise((resolve, reject) => {
		resolve({
			// Fetch all reviews from db
			reviews: [
				{id: 1, title: 'A thing'},
				{id: 2, title: 'Another thing'}
			]
		});
	})
}

function fetchAllPosts(callback) {
	const query = 'SELECT titleid, timestamp, title FROM posts ORDER BY timestamp DESC;';
	
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
			{posts: response}
		)
	}).catch(reject => {
		return reject;
	})
}

function fetchSinglePost(postid, callback) {
	const query = 'SELECT timestamp, title, body FROM posts WHERE postid=' + postid;
	
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
  fetchAllPosts, 
  fetchSinglePost, 
  fetchData
}
