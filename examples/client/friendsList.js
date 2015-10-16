Template.friendsList.onCreated(function () {
  console.log('onCreated?');
  that = this
  that.autorun(function() {
    that.subscribe("friendsList",{});
  });


});

Template.friendsList.helpers({
  listName: function() {
    return "나의 친구들 목록";
  },
  list: function() {
    return Friends.find().fetch()
  }
});

Template.friendsList.events({

});