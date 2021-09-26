const AppMain = require('../components/main')

describe('Main', () => {
	let html

	it('Returns the correct markup for the supplied value for the page', () => {
		// Arrange
		AppMain.getPage = jest.fn()
		AppMain.getPage.mockImplementation((page) => {
			if (!page) {
				return `<p>404</p>`
			}
		})

		// Act
		html = AppMain.getHtml()

		// Assert
		expect(html).toBe(`<p>404</p>`)
	})
})
