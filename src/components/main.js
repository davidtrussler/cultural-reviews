const Listing = require('./listing');

const AppMain = {
	getHtml(page, data) {
		const getAllReviews = function(data) {
			let html = '';
			let reviews = JSON.parse(data).reviews;
			let listing

			console.log('reviews: ', reviews);

			reviews.map((review) => {
				listing = new Listing(review)
				html += `<li>${listing.getReview()}</li>`
			})

			return html
		}

		switch (page) {
			case 'home':
				return (
					`<section>
						<p>An introductory section to the site</p>
					</section>
					<section>
						<ul>
							${getAllReviews(data)}
						</ul>
					</section>`
				)
				break;
			case 'review':
				return (
					'<p>This is a review page</p>'
				)
				break;
			default:
				return (
					`<p>404: This page was not found</p>`
				)
		}
	}
}

exports.getHtml = AppMain.getHtml
