'use strict';

/**
 * main-tournament service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-tournament.main-tournament');
