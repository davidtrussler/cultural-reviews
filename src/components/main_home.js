const AppListing = require('./listing');
const AppMainHome = {
	props: ['pageTitle', 'reviewsData'],
	components: {
		'app-listing': AppListing
	},
	template: `
		<main>
			<section>
				<p>An introductory section to the site.</p>
			</section>

			<section>
				<ul>
					<li
						v-for="review in reviewsData"
						v-bind:key="review.id"
					>
						<app-listing
							v-bind:review=review
						>
						</app-listing>
					</li>
				</ul>
			</section>
		</main>
	`	
}; 

module.exports = AppMainHome;
