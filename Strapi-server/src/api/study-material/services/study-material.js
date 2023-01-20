'use strict';

/**
 * study-material service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::study-material.study-material');
