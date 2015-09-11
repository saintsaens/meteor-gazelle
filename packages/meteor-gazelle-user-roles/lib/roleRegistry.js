Gazelle.roleRegistry = {
  roles: {},

  register: function(role, description) {
    check(role, String);
    check(description, String);
    Gazelle.roleRegistry.roles[role] = description;
  }
};

Gazelle.roleRegistry.register('test role', 'description');
console.log(Gazelle);