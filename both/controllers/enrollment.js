EnrollmentController = AppController.extend({
  waitOn: function() {
    return this.subscribe('enrollment');
  },
  data: {
    enrollment: Enrollment.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Enrollment');
  }
});

var clearValues = function () {
  $('#firstName').val("").focus();
  $('#lastName').val("");
  $('#dateOfBirth').val("");
  $('#age').val("");
}

var okCancelEvents = function (selector, callbacks) {
  var ok = callbacks.ok || function () {};
  var cancel = callbacks.cancel || function () {};

  var events = {};
  events['keyup '+selector+', keydown '+selector+', focusout '+selector] =
    function (evt) {
      if (evt.type === "keydown" && evt.which === 27) {
        // escape = cancel
        cancel.call(this, evt);
      }
      else if (evt.type === "keyup" && evt.which === 13) {
        //blur/return/enter = ok/submit if non-empty
        var value = String(evt.target.value || "");
        if (value)
          ok.call(this, value, evt);
        else
          cancel.call(this, evt);
      }
    };
    return events;
};

// EnrollmentController.events(okCancelEvents
//   '#age': function (e, tmpl) {
//     event.preventDefault();
//     ok: function (number, evt) {
//       var firstName = $('#firstName').val();
//       var lastName = $('#lastName').val();
//       var dateOfBirth = $('#dateOfBirth').val();
//       var age = $('#age').val();
//       Enrollment.insert({firstName:firstName,lastName:lastName,dateOfBirth:dateOfBirth,age:number});
//       clearValues();
//     }
//   }
// );
