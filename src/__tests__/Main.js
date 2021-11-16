const AppMain = require('../components/main')

let html;
let page;
let main = document.createElement('main');

document.body.append(main);

describe('Main', () => {
	it('Returns the correct markup when the error page is called', () => {
		// Arrange
		page = 'error';

		// Act
		html = AppMain.getHtml(page);
		document.body.querySelector('main').innerHTML = html;

		// Assert
		expect(document.querySelector('main').textContent).toBe('404: This page was not found')
	})
})
