'use strict';

/**
 * fast-code router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::fast-code.fast-code');
