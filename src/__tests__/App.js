/**
 * Constructs the string to be rendered by the server 
 */
const {Client} = require('pg')
const {fetchData} = require('../db/index')
const app = require('../app')

jest.mock('pg')
jest.mock('../db/index')

describe('App', () => {
	fetchData.mockResolvedValue(`
		{
		  "reviews": [
		    {
		      "id": 1,
		      "medium": "book",
		      "title": "Transit",
		      "author": "Rachel Cusk", 
		      "img_thumb": "/images/transit_thumb.jpg", 
		    }, 
		    {
		      "id": 2,
		      "medium": "theatre",
		      "title": "Death of England",
		      "writer": "Clint Dyer, Roy Williams",
		      "img_thumb": "https://picsum.photos/id/1015/60", 
		    }
		  ]
		}
	`)

	it('Constructs the string to be send to the server', () => {
		let expected = `
			<html lang="en-GB">
				<head>
					<title>The title</title>
					<meta charset="utf-8"/>
				</head>

				<body>
					<header>the header</header>
					<main>the main section</main>
					<footer>the footer</footer>
				</body>
			</html>		
		`

		return fetchData().then((data) => {
			let html = app.buildMarkup(data).replace(/[^a-zA-Z0-9]/g, '')

			expect(html).toMatch(expected.replace(/[^a-zA-Z0-9]/g, ''))
		})
	})
})
