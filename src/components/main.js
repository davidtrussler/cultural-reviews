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
				html += `<li class="reviews-listing">${listing.getReview()}</li>`
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
					`<div class="constrained">
						<div class="main__inner">
							<section class="introduction">
								<p>Alright so Bob Dylan wasn&#8217;t impressed with his critics, as expressed in his song <span class="title">Ballad of a Thin Man</span>. Troubadours rarely are. But I&#8217;ve paraphrased his song title to name my reviews site nonetheless because it feels right.</p>
								<p>I&#8217;m David Trussler and the arts and culture have always been a major part of my life. So I thought I&#8217;d start writing about culture in all its forms. I want to share my enthusiasm for what it can do for us, and occasionally when it maybe doesn&#8217;t quite pull it off.</p>
								<p>I like to think I have some idea of what&#8217;s going on here.</p>
							</section>
							<section class="reviews-list">
								<ul>
									${getAllReviews(data)}
								</ul>
							</section>
						</div>
					</div>`
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
