/*!
 * <%= appName %> — <%= appDescription %>
 */

'use strict';

/**
 * Module dependencies
 * @private
 */
const express = require( 'express' );
const router = exports = module.exports = express.Router();

/**
 * Handle routes
 */
router.all( '/', function ( req, res, next ) {
  var json = {
      'status': 200
    , 'message': 'API is available at /api'
  };
  res.json( json );
  next();
} );
