import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Bunny } from './bunny';

@Injectable({
  providedIn: 'root',
})
export class BunnyService {
  private bunnies: Bunny[] = [];

  constructor(private http: HttpClient) {}

  addBunny(bunny: Bunny) {
    const newBunny = { ...bunny };
    this.bunnies.push(newBunny);
    console.log(newBunny);
    
    return newBunny;
  }

  getBunnies() {
    this.http
    .get<any>('http://localhost:3000/posts') 
    .subscribe((response) => {
      const postData = response.posts;
      console.log(postData)

      // Map the postData to Bunny objects
      this.bunnies = postData.map((element) => {
        return {
          id: element.id,
          name: element.name,
          gender: element.gender,
          breed: element.breed,
          age: element.age,
          weight: element.weight,
          content: element.content,
        } as Bunny; 
      });
    });
  }
}