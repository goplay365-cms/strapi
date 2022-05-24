'use strict';

/**
 * casino-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::casino-service.casino-service');
