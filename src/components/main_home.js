const AppMainHome = {
	props: ['pageTitle', 'reviewsData'],
	template: `
		<main>
			<p>This is the main section of the {{ pageTitle }} page.</p>

			<ul>
				<li
			    v-for="review in reviewsData.reviews"
			    v-bind:key="review.id"
		    >
			    {{ review.title }}
		  	</li>
	  	</ul>
		</main>
	`	
}; 

module.exports = AppMainHome;
