/**
 * Tests the string that will be rendered to the DOM
 * I want createSSRApp to return a string so that I can leave out the `renderToString` Vue method
 */
const {Client} = require('pg')
const {fetchData} = require('../db/index')
const createSSRApp = require('../app')

jest.mock('pg')
jest.mock('../db/index')
jest.mock('../app')

describe('Server', () => {
	createSSRApp.mockResolvedValue(`
		<html lang="en-GB">
			<head>
				<title>Home</title>
				<meta charset="utf-8">
			</head>

			<body>
				<header>
					<h1>Cultural Reviews</h1>
					<h2>A trip through my cultural life</h2>
				</header>

				<main>
					<section>
						<p>An introductory section to the site.</p>
					</section>

					<section>
						<ul>
							<li>
								<a href="/review/1">
									<img src="/images/transit_thumb.jpg" alt="" width="60">
									<span>Book</span>
									<span>Transit</span>
									<span>By <span>Rachel Cusk</span></span>
								</a>
							</li>

							<li>
								<a href="/review/2">
									<img src="https://picsum.photos/id/1015/60" alt="" width="60">
									<span>Theatre</span>
									<span>Death of England</span>
									<span>By <span>Clint Dyer</span> and <span>Roy Williams</span></span>
								</a>
							</li>
						</ul>
					</section>
				</main>

				<footer>
					<p>© David Trussler 2021</p>
				</footer>
			</body>
		</html>
	`)

	it('Renders the markup to the DOM', () => {
		return createSSRApp('/').then((app) => {
			console.log('app: ', app)
		})
	})
})
