const Staff = require("../models/staff.model");

async function getCooks(request, reply) {
  try {
    const scheduledstaff = await Staff.find( {'cooks': {}} );
    reply.send({'cooks': scheduledstaff});
  } catch (error) {
    reply.status(500).send(error);
  }
}
async function getWaiters(request, reply) {
  try {
    const scheduledstaff = await Staff.find( {'waiters': {}} );
    reply.send({'waiters': scheduledstaff});
  } catch (error) {
    reply.status(500).send(error);
  }
}

module.exports = {
  getCooks,
  getWaiters,
};
