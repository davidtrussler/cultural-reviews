/**
 * Constructs the string to be rendered by the server 
 */
const {Client} = require('pg')
const {fetchData} = require('../db/index')
const app = require('../app')
const AppHeader = require('../components/header');
const AppMain = require('../components/main');
const AppFooter = require('../components/footer');

jest.mock('pg')
jest.mock('../db/index')
jest.mock('../components/header')
jest.mock('../components/main')
jest.mock('../components/footer')

describe('App', () => {
	it('Constructs the base string to be send to the server', () => {
		AppHeader.getHtml.mockImplementation(() => {return `<h1>The main heading</h1><h2>A subheading</h2>`})
		AppMain.getHtml.mockImplementation(() => {return `<p>The main section</p>`})
		AppFooter.getHtml.mockImplementation(() => {return `<p>The footer</p>`})
		fetchData.mockResolvedValue()

		return fetchData().then(() => {
			document.documentElement.innerHTML = app.buildMarkup()

			expect(document.querySelector('header h1').textContent).toBe('The main heading')
			expect(document.querySelector('header h2').textContent).toBe('A subheading')
			expect(document.querySelector('main p').textContent).toBe('The main section')
			expect(document.querySelector('footer p').textContent).toBe('The footer')
		})
	})
})
