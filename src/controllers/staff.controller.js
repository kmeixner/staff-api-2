const Staff = require("../models/staff.model");

async function getCooks(request, reply) {
  try {
    const staff = await Staff.find();
    reply.send(staff);
  } catch (error) {
    reply.status(500).send(error);
  }
}
async function getWaiters(request, reply) {
  try {
    const staff = await Staff.find();
    reply.send(staff);
  } catch (error) {
    reply.status(500).send(error);
  }
}

module.exports = {
  getCooks,
  getWaiters,
};
