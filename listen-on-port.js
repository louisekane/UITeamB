
// NPM dependencies
const browserSync = require('browser-sync')
const https = require('https')
const http = require('http')
const fs = require('fs')

// Local dependencies
const server = require('./server.js')
const config = require('./app/config.js')
const utils = require('./lib/utils.js')

// Set up configuration variables
var useBrowserSync = config.useBrowserSync.toLowerCase()
var env = utils.getNodeEnv()

utils.findAvailablePort(server, function (port) {
  console.log('Listening on port ' + port + '   url: http://localhost:' + port)
  if (env === 'production' || useBrowserSync === 'false') {
    var certificate = fs.readFileSync( 'security/cert.pem' );
    var key = fs.readFileSync( 'security/cert.key' );

    http.createServer({
      key: key,
      cert: certificate
  }, server).listen(port);
  } else {
    server.listen(port - 50, function () {
      browserSync({
        proxy: 'localhost:' + (port - 50),
        port: port,
        ui: false,
        files: ['public/**/*.*', 'app/views/**/*.*'],
        ghostMode: false,
        open: false,
        notify: false,
        logLevel: 'error'
      })
    })
  }
})
