const {Client} = require('pg')
const {fetchData} = require('../db/index')
const createSSRApp = require('../app')

jest.mock('pg')
jest.mock('../db/index')

describe('Home page', () => {
	fetchData.mockResolvedValue('stuff')

	it('Displays a list of reviews when the page loads', () => {
		return createSSRApp('/').then(() => {
			return fetchData('/').then((data) => {
			})
		})
	})
})
