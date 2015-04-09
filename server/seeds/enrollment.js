Meteor.startup(function() {

  Factory.define('enrollment', Enrollment, {
    name: function() { return Fake.sentence(); },
    rating: function() { return _.random(1, 5); }
  });

  if (Enrollment.find({}).count() === 0) {

    _(10).times(function(n) {
      Factory.create('enrollment');
    });

  }

});
