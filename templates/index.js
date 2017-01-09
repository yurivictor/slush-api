/*!
 * <%= appName %> — <%= appDescription %>
 */

'use strict';

/**
 * Module dependencies
 * @private
 */
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const slash = require( './routes/default' );
const api = require( './routes/api' );

/**
 * Expose application
 */
const app = exports = module.exports = express();

/**
 * Initialize application configuration
 */
function defaultConfiguration () {
  // Configure app to use bodyParser()
  // – This will let us get the data from a POST request
  app.use( bodyParser.urlencoded( { extended: true } ) );
  app.use( bodyParser.json() );
  // Set our port
  app.set( 'port', process.env.PORT || 8080 );
  // Set our routes
  app.use( '/', slash );
  app.use( '/api', api );
}

/**
 * Start the server
 */
function startServer () {
  let port = app.get( 'port' );
  app.listen( port );
  console.log( 'Magic happens on port ' + port );
}

/**
 * Start application
 */
function init () {
  defaultConfiguration();
  startServer();
}

init();
