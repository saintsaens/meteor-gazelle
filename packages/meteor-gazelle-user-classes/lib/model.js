// TODO(ajax) How to handle ranking

UserClasses = new Mongo.Collection('userClasses');

UserClass = Astro.Class({
  'name': 'UserClass',
  'collection': UserClasses,
  fields: {
    'title': {
      type: 'string'
    },
    'shortTitle': {
      type: 'string'
    },
    'rank': {
      type: 'number'
    },
    'isSecondary': {
      type: 'boolean'
    },
    'isDefaultClass': {
      type: 'boolean',
      deault: false
    },
    // TODO(ajax) How to validate permissions are valid?
    'permissions.$': {
      type: 'array',
      default: []
    },
    'permissions.$': {
      // (ajax) Should this be string or object?
      type: 'string'
    }
  },
  validators: {
    'title': Validators.required(),
    'shortTitle': Validators.required(),
    'isSecondary': Validators.required()
  },
  behaviors: ['timestamp']
});


var saveUserClass = function(userClass, doc) {
  userClass.set('title', doc.title);
  userClass.set('shortTitle', doc.shortTitle);
  userClass.set('isSecondary', false);
  userClass.save();
};


Meteor.methods({
  'userClasses/insert': function(doc) {
    //TODO(ajax) Be sure set all required values
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
