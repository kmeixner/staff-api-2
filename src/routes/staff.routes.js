const staffController = require("../controllers/staff.controller");

async function routes(fastify, options) {
  fastify.get("/GetCooks", staffController.getCooks);
  fastify.get("/GetWaiters", staffController.getWaiters);
}

module.exports = routes;