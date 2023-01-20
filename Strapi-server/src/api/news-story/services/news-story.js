'use strict';

/**
 * news-story service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-story.news-story');
