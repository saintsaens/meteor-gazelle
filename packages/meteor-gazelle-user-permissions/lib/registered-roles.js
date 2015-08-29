RegisteredRoles = {
  registeredRoles: {},
  roleExists: function (group, role) {
    return this.registeredRoles !== undefined && this.registeredRoles[group].indexOf(role) >= 0;
  },
  register: function (group, roles) {
    // TODO(ajax) Add validation to ensure object is of correct structure, see
    // TODO(ajax) Keep the registeredPermissions object sorted
    if (this.registeredRoles[group] === undefined) {
      this.registeredRoles[group] = roles;
    } else {
      this.registeredRoles[group] = _.union(this.registeredRoles[group], roles);
    }
  }
};
