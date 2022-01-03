import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cat } from './cat.model';

@Injectable({providedIn: 'root'})
export class DbService extends InMemoryDbService {

  createDb(): Object {
    return {
      cats: [
        {id: 0, name: 'Taka'}
      ]
    };
  }

  genId(cats: Cat[]): number {
    return cats.length > 0 ? Math.max(...cats.map(cat => cat.id)) + 1 : 11;
  }

}
