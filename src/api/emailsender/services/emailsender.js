'use strict';

/**
 * emailsender service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emailsender.emailsender');
