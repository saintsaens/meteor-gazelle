UserClasses = new Mongo.Collection('userClasses');
UserClasses.attachSchema(Gazelle.schema.userClass);
Meteor.users.attachSchema(Gazelle.schema.userClasses);

var userIsInRoleOriginal = Roles.userIsInRole;
Roles.userIsInRole = function (user, roles, group) {
  var userId = Util.getId(user);
  var isInRole = false;

  if (userId) {
    isInRole = userIsInRoleOriginal.apply(userIsInRoleOriginal, [user, roles, group]);

    if (!isInRole) {
      var result = Meteor.users.findOne({_id: userId}, {fields: {userClasses: 1}});
    }
  }
  return isInRole;
};

if (Meteor.isClient) {
  Meteor.subscribe('user-classes');
}

if (Meteor.isServer) {
  Meteor.publish(null, function () {
    return Meteor.users.find({_id: this.userId}, {fields: {userClasses: 1}});
  });

  Meteor.publish('user-classes-admin', function () {
    if (Roles.userIsInRole(this.userId, ['super-user'])) {
      return UserClasses.find();
    }
    this.error(new Meteor.Error('invalid-roles'));
    return;
  });

  Meteor.publish('user-classes', function () {
    var result = Meteor.users.findOne({_id: this.userId}, {fields: {userClasses: 1}});
    if (Array.isArray(result.userClasses)) {
      return UserClasses.find({_id: {$in: [result.userClasses]}});
    }
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
