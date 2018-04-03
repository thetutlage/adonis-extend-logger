const { ServiceProvider } = require('@adonisjs/fold')

class LogentriesProvider extends ServiceProvider {
  register () {
    this.app.extend('Adonis/Src/Logger', 'logentries', () => {
      class Logentries {
        setConfig () {}
        log (...args) {
          console.log(...args)
        }
      }
      return new Logentries()
    })
  }
}

module.exports = LogentriesProvider
