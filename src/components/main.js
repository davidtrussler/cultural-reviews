const AppMain = {
	getHtml(page) {
		console.log('getHtml!')
		console.log('page: ', page)

		switch (page) {
			case 'home':
				return this.getPage(page)
				break;
			default:
				return this.getPage()
		}
	},

	getPage() {
		return (
			`<p>404: This page was not found</p>`
		)
	}
}

exports.getHtml = AppMain.getHtml
exports.getPage = AppMain.getPage
