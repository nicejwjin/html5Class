Template.friendsListItem.events({
  "click [name=remove]": function(evt, tmpl) {
    console.log(this.no);
    console.log(this.email);
    //console.log(this);
  }
});