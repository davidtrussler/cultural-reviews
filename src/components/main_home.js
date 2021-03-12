const AppMainHome = {
	props: ['pageTitle', 'reviewsData'],
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
						<a v-bind:href="'/review/' + review.id">{{review.title}} | {{review.medium}}</a>
					</li>
				</ul>
			</section>
		</main>
	`	
}; 

module.exports = AppMainHome;
