'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
    async sendEmail (ctx) {
        let entity;

        entity = await strapi.services.contact.create(ctx.request.body);

        await strapi.plugins['email'].services.email.send({
            to: 'markodumnic8@gmail.com',
            from: entity.email,
            subject: 'Car Washing',
            text: 'My name is ' +entity.name+ '. My card brand is ' +entity.carBrand+ '. You can contact me on this phone number ' +entity.phone,
        })
        return sanitizeEntity(entity, {model: strapi.models.contacts });
    }
};
