/**
 * Constructs the string to be rendered by the server 
 */
const {Client} = require('pg')
const {fetchData} = require('../db/index')
const app = require('../app')
const AppHeader = require('../components/header');
const AppFooter = require('../components/footer');

jest.mock('pg')
jest.mock('../db/index')
jest.mock('../components/header')
jest.mock('../components/footer')

describe('App', () => {
	AppHeader.getHtml.mockImplementation(() => {return `<h1>The main heading</h1><h2>A subheading</h2>`})
	AppFooter.getHtml.mockImplementation(() => {return `<p>The footer</p>`})

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
		return fetchData().then((data) => {
			document.documentElement.innerHTML = app.buildMarkup(data)

			expect(document.title).toBe('The title')

			expect(document.querySelector('header h1').textContent).toBe('The main heading')
			expect(document.querySelector('header h2').textContent).toBe('A subheading')

			expect(document.querySelector('footer p').textContent).toBe('The footer')
		})
	})
})
