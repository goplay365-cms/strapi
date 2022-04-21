'use strict';

/**
 * special-value service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::special-value.special-value');
