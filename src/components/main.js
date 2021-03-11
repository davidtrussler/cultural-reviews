const AppMain = {
	props: ['pageTitle'], 
	template: `
		<main>
			<p>This is the main section of the {{ pageTitle }} page</p>

			<h1>404</h1>
		</main>
	`	
}

module.exports = AppMain;
