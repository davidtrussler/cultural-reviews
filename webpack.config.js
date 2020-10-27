module.exports = {
  entry: './src/server/index.js',
  mode: 'production', 
  node: {
  	fs: 'empty', 
	  net: 'empty'
	}
}
