export class User {
  constructor (id, e, f, l, z) {
    this.id = id;
    this.email = e;
    this.firstName = f;
    this.lastName = l;
    this.zipcode = z;
    this.theaters = [];
  }
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    zipcode: string;
    theaters: string[];
  }
