const AppHead = require('../components/head')

describe('Head', () => {
	let html

	it('Returns the correct markup when called', () => {
		// Arrange
		AppHead.getHtml = jest.fn()
		AppHead.getHtml.mockImplementation(() => {
			return `<title>The title</title>`
		})

		// Act
		html = AppHead.getHtml()

		// Assert
		expect(html).toBe(`<title>The title</title>`)
	})
})
