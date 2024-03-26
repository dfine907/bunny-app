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
    return newBunny;
  }

  getBunnies() {
    this.http
    .get<any>('http://localhost:3000/posts') 
    .subscribe((response) => {
      const postData = response.posts;

      // Map the postData to your Bunny objects
      this.bunnies = postData.map((data) => {
        return {
          id: data.id,
          name: data.name,
          gender: data.gender,
          breed: data.breed,
          age: data.age,
          weight: data.weight,
          content: data.content,
        } as Bunny; 
      });
    });
  }
}