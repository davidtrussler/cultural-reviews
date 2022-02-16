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
			"title": "Open the Gates",
			"author": "", 
			"publisher": "",
			"date_publication": "",
			"director": "", 
			"actors": "", 
			"running_time": "", 
			"country": "", 
			"date_release": "2021-11-12",
			"venue": "", 
			"date_opening": "", 
			"date_closing": "", 
			"writer": "",
			"date_event": "",
			"artist": "Irreversible Entanglements",
			"label": "International Anthem Recording Company/Don Giovanni Records",
			"text": "<p>On <span class=\\"title\\">Open the Gates</span> Irreversible Entanglements take us on a trip through space and time via poetry and jazz, Latin and Afro-Carribbean beats, avant-garde free improvisation and other-worldly electronics. It&#8217;s an enthralling journey.</p><p>A collective of five individuals&#8212;poets, musicians and activists&#8212;the band came together organically through combined working relationships and friendships. They see their mission as cultivating &#8220;the liberation technologies of jazz and associated Black music&#8212;root, stem and branch&#8212;into the future&#8221;.</p><p>This, their third album&#8212;recorded in a single day&#8212;ranges in mood across its seven tracks from the short title track driven by the irresistible pulse of drummer Tcheser Holmes and bassist Luke Stewart, to the side-long <span class=\\"title\\">Water Meditation</span>, on which the band build from quiet reflection to cacophony and back again.</p><p>The rhythm section is joined by trumpet player Aquiles Navarro, sax player Keir Neuringer and the prolific vocalist Camae Ayewa a.k.a. Moor Mother, who all contribute synths and occasional electronics to the band&#8217;s sound.</p><p>While listening to Navarro and Neuringer on <span class=\\"title\\">Storm Came Twice</span> I&#8217;m reminded of the gloriously skewed harmony between Ornette Coleman and Don Cherry on <span class=\\"title\\">Lonely Woman</span> recorded back in 1959. On <span class=\\"title\\">Water Meditation</span> the two blow hard while electronic sounds conjure up thunder as that track reaches its peak.</p><p>Through it all Ayewa draws the strands together with her spoken words. <span class=\\"title\\">Open the Gates</span> kicks off with a statement of intent: &#8220;We arrive, energy time. Universal sound law, not guilty, not doing time, unbound.&#8221;</p><p>While the words summon up intense feelings of history, of creation, of the interconnectedness of everything Ayewa grounds it with references to antecedents in jazz history like Ella Fitzgerald, Billie Holliday and Nina Simone.</p><p>History too of the slave trade is at the heart of <span class=\\"title\\">The Port Remembers</span>. As the images of Edward Colston&#8217;s plunge into the harbour crossed the globe she is inspired to speak of &#8220;Cotton from America, blood from Bristol&#8221;.</p><p>There&#8217;s a real feeling of urgency to this music. As they closed their set at the London Jazz Festival late last year Ayewa gently berated her audience: &#8220;You gotta wake up. I know London is full of dead people but some of us are still alive.&#8221; Listening to this thrilling album will make you feel very much alive.</p>",
			"img_thumb": "/images/open-the-gates.jpg",
			"img_main": "/images/irreversible-entanglements.jpg",
			"timestamp": "2022-02-16"
		}
	]
}`

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
