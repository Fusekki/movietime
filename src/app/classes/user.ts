export class User {
  constructor (id, e, f, l, z) {
    this._id = id;
    this.email = e;
    this.firstName = f;
    this.lastName = l;
    this.zipcode = z;
    this.theaters = [];
  }
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    zipcode: string;
    theaters: string[];
  }
