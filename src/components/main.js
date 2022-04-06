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
				html += `<li class="reviews__listing">${listing.getReview()}</li>`
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
					`<div class="container">
						<div class="main__inner">
							<section class="introduction">
								<p>Alright so Bob Dylan wasn&#8217;t impressed with critics, as expressed in his song <cite>Ballad of a Thin Man</cite>. Troubadours rarely are. I&#8217;m paraphrasing his song title to name my new reviews site nonetheless.</p>
								<p>The arts have always been a major part of my life. So I thought I&#8217;d start writing about culture in all its forms to share my enthusiasm for what it can do for us. I like to think I have some idea of what&#8217;s happening here.</p>
								<p>David Trussler, March 2022</p>
							</section>
							<section class="reviews">
								<ul class="reviews__list">
									${getAllReviews(data)}
								</ul>
							</section>
						</div>
					</div>`
				)
				break;
			case 'review':
				return (
					`<div class="review container">
						<p class="review__back-link"><a href="/">Back to reviews</a></p>
						<article class="review__content">
							${getReview(data)}
						</article>
					</div>`
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
