Meteor.methods({
  friendsList: function() {
    // security
    console.log('methods run');
    return Friends.find({}, {sort: {no: 1}}).fetch();
  }
});