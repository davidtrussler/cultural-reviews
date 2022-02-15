/**
 * This is currently using stubbed data in place of a database query for ease of development
 */

// require('dotenv').config(); 

// const {Client} = require('pg')

// Temporary json to stub data from database
const results = 
`{
	"reviews": [
		{
			"id": 1,
			"medium": "book",
			"title": "Transit",
			"author": "Rachel Cusk", 
			"publisher": "Jonathan Cape",
			"date_publication": "2016-01-01",
			"director": "", 
			"actors": "", 
			"running_time": "", 
			"country": "", 
			"date_release": "", 
			"venue": "", 
			"date_opening": "", 
			"date_closing": "", 
			"writer": "", 
			"date_event": "", 
			"artist": "", 
			"label": "", 
			"text": "Second part of trilogy that begins with Outline and ends with Kudos",
			"img_thumb": "/images/transit_thumb.jpg", 
			"img_main": "/images/Writer-and-novelist-Rache-011.jpg",
			"timestamp": "2021-03-28 11:21:55.922807"
		}, 
		{
			"id": 2,
			"medium": "theatre",
			"title": "Death of England",
			"author": "", 
			"publisher": "",
			"date_publication": "",
			"director": "Clint Dyer", 
			"actors": "Rafe Spall", 
			"running_time": "", 
			"country": "", 
			"date_release": "", 
			"venue": "National Theatre", 
			"date_opening": "2020-01-31", 
			"date_closing": "2020-03-07", 
			"writer": "Clint Dyer, Roy Williams",
			"date_event": "",
			"artist": "", 
			"label": "", 
			"text": "A family in mourning. A man in crisis.",
			"img_thumb": "https://picsum.photos/id/1015/60", 
			"img_main": "https://picsum.photos/id/1015/300/200",
			"timestamp": "2021-03-28 11:22:39.234798"
		},
		{
			"id": 3,
			"medium": "cinema",
			"title": "The Loneliness of the Long Distance Runner",
			"author": "", 
			"publisher": "",
			"date_publication": "",
			"director": "Tony Richardson", 
			"actors": "Michael Redgrave, Tom Courtenay, Avis Bunnage, Alec McCowen", 
			"running_time": "100", 
			"country": "UK", 
			"date_release": "1962-01-01", 
			"venue": "", 
			"date_opening": "", 
			"date_closing": "", 
			"writer": "",
			"date_event": "",
			"artist": "", 
			"label": "", 
			"text": "The much-loved Tom Courtenay made his name in this iconic film, the scalding story of teenager Colin Smith, who is sent to a rural borstal for burglary but marked out by his talent as a cross-country runner.",
			"img_thumb": "https://picsum.photos/id/1016/60", 
			"img_main": "https://picsum.photos/id/1016/300/200",
			"timestamp": "2021-03-28 11:22:51.066095"
		}, 
		{
			"id": 4,
			"medium": "art_visual",
			"title": "Anselm Kiefer",
			"author": "", 
			"publisher": "",
			"date_publication": "",
			"director": "", 
			"actors": "", 
			"running_time": "", 
			"country": "", 
			"date_release": "", 
			"venue": "White Cube Bermondsey", 
			"date_opening": "2019-11-15", 
			"date_closing": "2020-01-26", 
			"writer": "",
			"date_event": "",
			"artist": "", 
			"label": "", 
			"text": "White Cube is pleased to present an exhibition of new work by Anselm Kiefer.",
			"img_thumb": "https://picsum.photos/id/1014/60", 
			"img_main": "https://picsum.photos/id/1014/300/200",
			"timestamp": "2021-03-28 11:23:00.643746"
		}, 
		{
			"id": 5,
			"medium": "music_performed",
			"title": "John Tilbury / Bertrand Gauguet",
			"author": "", 
			"publisher": "",
			"date_publication": "",
			"director": "", 
			"actors": "", 
			"running_time": "", 
			"country": "", 
			"date_release": "", 
			"venue": "Cafe Oto", 
			"date_opening": "", 
			"date_closing": "", 
			"writer": "",
			"date_event": "2019-09-18",
			"artist": "", 
			"label": "", 
			"text": "John Tilbury and Bertrand Gauguet improvise a music of slowness, sometimes silent, sometimes tempestuous. Playing with the acoustic qualities of the place, are woven between the piano and the saxophone subtle games of harmonic textures, appearances of differential sounds, resonances and sometimes some more noisy sequences. A music to stretch the listening like a bow.",
			"img_thumb": "https://picsum.photos/id/1018/60", 
			"img_main": "https://picsum.photos/id/1018/300/200",
			"timestamp": "2021-03-28 11:23:11.240502"
			}, 
		{
			"id": 6,
			"medium": "music_recorded",
			"title": "A Glorious Monster",
			"author": "", 
			"publisher": "",
			"date_publication": "",
			"director": "", 
			"actors": "", 
			"running_time": "", 
			"country": "", 
			"date_release": "2018-01-01", 
			"venue": "", 
			"date_opening": "", 
			"date_closing": "", 
			"writer": "",
			"date_event": "",
			"artist": "Sloth Racket", 
			"label": "Luminous", 
			"text": "With this fourth album in two years, Cath Roberts Sloth Racket consolidate what has by now become a recognisable MO. Essentially, with Roberts compositions, its all about how the quintet find their way to the inevitable riff.",
			"img_thumb": "https://picsum.photos/id/1019/60", 
			"img_main": "https://picsum.photos/id/1019/300/200",
			"timestamp": "2021-03-28 11:23:22.894148"
		}
	]
}`

// let client = new Client({
// 	connectionString: process.env.DATABASE_URL
// });

// client.connect(); 

const fetchData = function(url) {
	console.log('fetchData!')
	console.log('url: ', url)

	return new Promise((resolve, reject) => {
		let query; 

		if (url.indexOf('/review/') > -1) {
			// let id = url.split('review/')[1];
			// query = 'SELECT * FROM reviews WHERE id=' + id;
			resolve(results)
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
