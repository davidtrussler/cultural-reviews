const AppMainHome = {
	props: ['pageTitle'], 
	data() {
		return {
			// Fetch all reviews from db
			reviews: [
				{id: 1, title: 'A thing'}, 
				{id: 2, title: 'Another thing'}
			]
		}
	},
	template: `
		<main>
			<p>This is the main section of the {{ pageTitle }} page.</p>

			<ul>
				<li
			    v-for="review in reviews"
			    :key="review.id"
		    >
			    {{ review.title }}
		  	</li>
	  	</ul>
		</main>
	`	
}; 

module.exports = AppMainHome;
