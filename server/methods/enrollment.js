Meteor.methods({
  'submitEnrollment': function ( firstName, lastName, birthday, age ) {
    console.log(firstName);
    console.log(lastName);
    console.log(birthday);
    console.log(age);

    Enrollment.insert ({
      firstName: firstName,
      lastname: lastName,
      birthday: dateOfBirth,
      age: age
    })
  }
});
