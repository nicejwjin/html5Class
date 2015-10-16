

Template.friendsList.helpers({
  listName: function() {
    return "나의 친구들 목록";
  },
  list: function() {
    Meteor.call('friendsList', function(err, rslt) {
      console.log(rslt);
      Session.set('data', rslt);
    });
    return Session.get('data');
  }
});

Template.friendsList.events({

});