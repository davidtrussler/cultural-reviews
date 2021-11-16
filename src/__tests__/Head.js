const AppHead = require('../components/head')
let html;
let page; 

describe('Head', () => {
	it('Returns the correct markup when the error page is called', () => {
		// Arrange
		page = 'error';

		// Act
		html = AppHead.getHtml(page);
		document.head.innerHTML = html;

		// Assert
		expect(document.querySelector('head').querySelector('title').textContent).toBe('Error')
	})

	it('Returns the correct markup when the home page is called', () => {
		// Arrange
		page = 'home';

		// Act
		html = AppHead.getHtml(page);
		document.head.innerHTML = html;

		// Assert
		expect(document.querySelector('head').querySelector('title').textContent).toBe('Home')
	})

	it('Returns the correct markup when the reviews page is called', () => {
		// Arrange
		page = 'review';

		// Act
		html = AppHead.getHtml(page);
		document.head.innerHTML = html;

		// Assert
		expect(document.querySelector('head').querySelector('title').textContent).toBe('Review')
	})
})
