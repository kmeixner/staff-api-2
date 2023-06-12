const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  monday: [{type: String, unique: true}],
  tuesday: [{type: String, unique: true}],
  wednesday: [{type: String, unique: true}],
  thursday: [{type: String, unique: true}],
  friday: [{type: String, unique: true}],
});

const StaffSchema = new mongoose.Schema({
  cooks: {ScheduleSchema},
  waiters: {ScheduleSchema},  
});

const Staff = mongoose.model("Staff", StaffSchema);

module.exports = Staff;
