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
router.get( '/', function ( req, res, next ) {
  var json = {
      'status': 200
  };
 res.json( json );
 next();
} );

router.get( '/:route', function ( req, res, next ) {
  var json = {
      'status': 200
  };
  res.json( json );
  next();
} );

router.post( '/:route', function ( req, res, next ) {
  var json = {
      'status': 200
  };
  res.json();
  next();
} );
