'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
    async create (ctx) {
        let entity;
        console.log("prije entity");
        entity = await strapi.services.contact.create(ctx.request.body);
        console.log("posle entity", entity);
        await strapi.plugins['email'].services.email.send({
            to: 'markodumnic8@gmail.com',
            from: entity.email,
            subject: 'Car Washing',
            text: 'My name is ' +entity.name+ '. My card brand is ' +entity.carBrand+ '. You can contact me on this phone number ' +entity.phone,
        })
        return sanitizeEntity(entity, {model: strapi.models.contacts });
    }
};
