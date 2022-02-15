const Listing = require('./listing');
const Review = require('./review');

const AppMain = {
	getHtml(page, data) {
		const getAllReviews = function(data) {
			let html = '';
			let reviews = JSON.parse(data).reviews;
			let listing;

			reviews.map((review) => {
				listing = new Listing(review)
				html += `<li>${listing.getReview()}</li>`
			})

			return html
		}

		const getReview = function(data) {
			let review = new Review(data)

			return review.getReview();
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
					`<p><a href="/">Back to reviews</a></p>
					<article>
						${getReview(data)}
					</article>`
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
