Meteor.publishComposite("enrollment", function() {
  return {
    find: function() {
      return Enrollment.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
