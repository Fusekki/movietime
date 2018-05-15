import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    created = Date.now();

  createDb() {
    const users = [
      {id: 0, email: 'janedoe@gmail.com',
                      firstName: 'Jane', lastName: 'Doe', zipcode: '' }
    ];

    const areas = [
      {}
    ];

    return {
      users,
      areas
      };
  }
}

