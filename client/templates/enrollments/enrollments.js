Template.enrollment.events({
  'submit #submitBtn': function (e, tmpl) {
    e.preventDefault();

    var firstName = tmpl.find('#firstName').value,
        lastName = tmpl.find('#lastName').value,
        birthday = tmpl.find('#dateOfBirth').value,
        age = tmpl.find('#age').value;

    Meteor.call('submitEnrollment', firstName, lastName, birthday, age);
  }
})

Enrollment.helpers = function () {
  return Enrollment.find();
}
