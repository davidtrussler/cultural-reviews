const AppMainHome = {
	props: ['pageTitle', 'reviewsData'],
	template: `
		<main>
			<p>This is the main section of the {{ pageTitle }} page.</p>

			<ul>
				<li
					v-for="review in reviewsData"
					v-bind:key="review.id"
				>
					<a v-bind:href="'/review/' + review.id">{{review.title}} | {{review.medium}}</a>
				</li>
			</ul>
		</main>
	`	
}; 

module.exports = AppMainHome;
