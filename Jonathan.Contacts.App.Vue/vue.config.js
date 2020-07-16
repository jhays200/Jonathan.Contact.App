module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: "../Jonathan.Contacts.App/wwwroot",
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5000',
      }
    }
  }
}