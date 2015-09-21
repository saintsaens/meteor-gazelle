UserClasses = new Mongo.Collection('userClasses');
UserClasses.attachSchema(Gazelle.schema.userClass);

Meteor.users.attachSchema(Gazelle.schema.userClasses);

if (Meteor.isServer) {
  //UserClasses.permit(['insert', 'update', 'remove']).ifHasRole('super-user').apply();

  Meteor.publish('user-classes-admin', function () {
    if (Roles.userIsInRole(this.userId, ['super-user'])) {
      return UserClasses.find();
    }
    this.error(new Meteor.Error('invalid-roles'));
    return;
  });


  Meteor.users.after.insert(function (userId, doc) {
    var defaultClasses = UserClasses.find({isDefault: true}, {fields: {_id: 1}});
    var classIds = [];
    defaultClasses.forEach(function (defaultClass) {
      classIds.push(defaultClass._id);
    });
    Meteor.users.update({_id: doc._id}, {$set: {userClasses: classIds}});
  });
}

Meteor.methods({
  'userClasses/insert': function (doc) {
    check(doc, Gazelle.schema.userClass);
    UserClasses.insert(doc);
  },
  'userClasses/update': function (doc, docId) {
    check(doc, Gazelle.schema.userClass);
    UserClasses.update(docId, {$set: doc.$set});
  },
  'userClasses/delete': function (docId) {
    UserClasses.remove(docId);
  }
});
