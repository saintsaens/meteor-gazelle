// TODO(ajax) How to handle ranking

UserClasses = new Mongo.Collection('userClasses');

UserClass = Astro.Class({
  name: 'UserClass',
  collection: UserClasses,
  fields: {
    title: {
      type: 'string'
    },
    shortTitle: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    rank: {
      type: 'number'
    },
    isSecondary: {
      type: 'boolean'
    },
    isDefault: {
      type: 'boolean',
      default: false
    },
    isStaff: {
      type: 'boolean',
      default: false
    },
    // TODO(ajax) How to validate roles are valid?
    roles: {
      type: 'array',
      default: []
    }
  },
  validators: {
    title: Validators.required(),
    shortTitle: Validators.required(),
    description: Validators.required(),
    isSecondary: Validators.required(),
    isStaff: Validators.required(),
    roles: function(fieldValue, fieldName) {
      console.log("roles validator called");
      var result = true;
      if (Meteor.isServer) {
        console.log(Roles.isValidRole(fieldValue));
      }
      return result;
    }
  },
  behaviors: ['timestamp']
});

var saveUserClass = function(userClass, doc) {
  userClass.set('title', doc.title);
  userClass.set('shortTitle', doc.shortTitle);
  userClass.set('description', doc.description);
  userClass.set('isSecondary', doc.isSecondary);
  userClass.set('isDefault', doc.isDefault);
  userClass.set('isStaff', doc.isStaff);
  userClass.set('roles', doc.roles);
  userClass.save();
};

Meteor.methods({
  'userClasses/create': function(doc) {
    check(doc, Forms.userClass);
    var userClass = new UserClass();
    saveUserClass(userClass, doc);
  },
  'userClasses/update': function(doc, docId) {
    check(doc, Forms.userClass);
    var userClass = UserClasses.findOne({_id: docId});
    if (userClass) {
      saveUserClass(userClass, doc.$set);
    }
  },
  'userClasses/delete': function(docId) {
    UserClasses.remove(docId);
  }
});


