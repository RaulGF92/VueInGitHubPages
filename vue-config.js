module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/VueInGitHubPages/'
    : '/',
	devServer: {
		disableHostCheck: true
	}
}