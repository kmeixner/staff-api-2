const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
require("dotenv").config();

// Import Routes:
const staffRoutes = require("./routes/staff.routes");

// Connect to DB (MONGODB_URI be defined in .env)
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database"))
  .catch((e) => console.log("Error connecting to database", e));

// start my server
fastify.register(staffRoutes, { prefix: "/" });

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 5000);
    fastify.log.info(
      `Server is running on port ${fastify.server.address().port}`
    );
  } catch (error) {}
};

start();