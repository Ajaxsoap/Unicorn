Enrollment = new Mongo.Collection('enrollment');

var EnrollmentSchema = {};

EnrollmentSchema.Enrollment = new SimpleSchema({
  firstName: {
    type: String,
    label: "First Name",
  },
  lastName: {
    type: String,
    label:"Last Name"
  },
  dateOfBirth: {
    type: Date,
    label: "Date of Birth"
  },
  age: {
    type: Number,
    label: "Age"
  }
});
