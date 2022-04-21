'use strict';

/**
 *  label controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::label.label', {
  count(ctx) {
      var { query } = ctx.request
      return strapi.query('api::label.label').count();
  }
});
