const AppMainReview = {
	props: ['pageTitle', 'reviewsData'], 
	template: `
		<main>
			<p>This is the main section of the {{ pageTitle }} page</p>

			<h1>{{reviewsData[0].title}}</h1>

			<p>{{reviewsData[0].text}}</p>
		</main>
	`	
}

module.exports = AppMainReview;
