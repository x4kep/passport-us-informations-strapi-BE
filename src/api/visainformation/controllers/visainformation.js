"use strict";

/**
 * visainformation controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::visainformation.visainformation",
  () => ({
    async create(ctx) {
      const { data } = ctx.request.body;
      const files = ctx.request.files;
      const parsedData = JSON.parse(data);

      // Documentation: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service/crud.html#findmany
      const entry = await strapi.entityService.create(
        "api::visainformation.visainformation",
        {
          data: {
            ...parsedData,
          },
          files: {
            photo: files["files.photo"],
          },
        }
      );

      ctx.send(entry);
      return entry;
    },
  })
);
