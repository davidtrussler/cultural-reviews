// import express from 'express'; 

const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 4000; 

// Seve static files
// app.use(express.static('public')); 

app.get('/', (req, res) => {
	res.send('Hello World')
}); 

// Fired every time the server receives a request
// app.use(handleRender); 

function generateMarkup(req) {
	return `
		<header>header</header>
		<main>main</main>
		<footer>footer</footer>
	`
	// (
	// 	ReactDOMServer.renderToString(
	//   	<StaticRouter location={req.url}>
	// 	  	<App />
	//   	</StaticRouter>
	// 	)
	// )
}

function handleRender(req, res) {
  // if (req.url.indexOf('/blog') > -1) {
		// // Blog page is requested
		// if (req.url.indexOf('?titleid') == -1) {
		// 	// Main page requested: display listings
		// 	dataStore.dispatch({
		// 		type: 'BLOG_CALLED_MAIN',
		// 	}); 

		// 	fetchAllPosts(data => {
		// 		// Add response data to store
		// 		dataStore.dispatch({
		// 			type: 'POSTS_UPDATED', 
		// 			payload: data
		// 		}); 

		// 		const markup = generateMarkup(req); 

		// 		res.send(renderFullPage(markup)); 
		// 	})
  // 	} else {
  // 		const titleid = req.url.split('?titleid=')[1]; 
  // 		const postidArr = titleid.split('-'); 
  // 		const postid = postidArr[postidArr.length - 1]; 

		// 	dataStore.dispatch({
		// 		type: 'BLOG_CALLED_POST', 
		// 		payload: {
		// 			'context': 'singlePost', 
		// 			'postid': postid
		// 		}
		// 	}); 

		// 	fetchSinglePost((postid), data => {
		// 		// Add response data to store
		// 		dataStore.dispatch({
		// 			type: 'POST_UPDATED', 
		// 			postid: postid, 
		// 			payload: data
		// 		}); 
				
		// 	  const markup = generateMarkup(req); 

		// 		res.send(renderFullPage(markup)); 
		// 	})
  // 	}
  // } else {
	  const markup = generateMarkup(req); 

		res.send(renderFullPage(markup)); 
  // }
}; 

function renderFullPage(markup) {
	return `
		<!doctype html>
		<html lang="en-GB">
			<head>
				<title>Title</title>
				<meta charset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
			</head>
			<body>
			  ${markup}
			</body>
		</html>
	`
}; 

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})
