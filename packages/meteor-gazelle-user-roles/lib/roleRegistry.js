Gazelle.roleRegistry = {
  roles: [],

  register: function (role, description) {
    //TODO(ajax) Add Validation
    Gazelle.roleRegistry.roles.push({role: role, description: description});
  }
};

Gazelle.roleRegistry.register("role a", "desc a");
Gazelle.roleRegistry.register("role b", "desc b");
Gazelle.roleRegistry.register("role c", "desc c");
Gazelle.roleRegistry.register("role d", "desc d");
