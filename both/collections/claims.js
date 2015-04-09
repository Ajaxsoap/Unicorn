Claims = new Mongo.Collection('claims');

Claims.helpers({

});

Claims.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
