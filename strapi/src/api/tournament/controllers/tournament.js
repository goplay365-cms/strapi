'use strict';

/**
 *  tournament controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tournament.tournament');
