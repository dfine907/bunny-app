// import { Injectable } from '@angular/core';
// import { Bunny } from './bunny';

// @Injectable({
//   providedIn: 'root',
// })
// export class BunnyService {
//   bunnies: Bunny[] = [];

//   addBunny(bunny: Bunny) {
//     this.bunnies.push(bunny);
//   }

//   getBunnies(): Bunny[] {
//     return this.bunnies;
//   }

// }

import { Injectable } from '@angular/core';
import { Bunny } from './bunny';

@Injectable({
  providedIn: 'root',
})
export class BunnyService {
  bunnies: Bunny[] = [];

  addBunny(bunny: Bunny) {
    const newBunny = { ...bunny };
    this.bunnies.push(newBunny);
    return newBunny; 
  }

  getBunnies(): Bunny[] {
    return this.bunnies;
  }
}
