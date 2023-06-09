const Staff = require("../models/staff.model");

async function getCooks(request, reply) {
  try {
    const staff = await Staff.find();
    reply.send(staff); // KM TODO: Make this only return cooks once problem with API always returning [] is fixed
  } catch (error) {
    reply.status(500).send(error);
  }
}
async function getWaiters(request, reply) {
  try {
    const staff = await Staff.find();
    reply.send(staff); // KM TODO: Make this only return waiters once problem with API always returning [] is fixed
  } catch (error) {
    reply.status(500).send(error);
  }
}

module.exports = {
  getCooks,
  getWaiters,
};
