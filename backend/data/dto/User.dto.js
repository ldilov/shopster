class UserDTO {
  constructor(user, token) {
    this._id = user._id;
    this.name = user.name;
    this.email = user.email;
    this.isAdmin = user.isAdmin;
    this.token = token;
  }
};

export default UserDTO;
