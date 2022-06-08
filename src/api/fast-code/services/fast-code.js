'use strict';

/**
 * fast-code service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fast-code.fast-code');
