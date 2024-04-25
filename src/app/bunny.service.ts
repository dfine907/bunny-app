import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Bunny, Breed } from './bunny';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BunnyService {
  private URL = 'http://localhost:3000';
  public bunnies: Bunny[] = [];
  public breeds: Breed[] = [];

  public getBreedById(id: number) {
    return this.breeds.find((b) => b.breed_id == id)?.breed_name;
  }

  constructor(public http: HttpClient) {
    this.loadBunnies();
    this.getBreeds().subscribe((res) => (this.breeds = res));

  }

  addBunny(bunny: Bunny) {
    const savedData = {
      name: bunny.name,
      gender: bunny.gender,
      breed: bunny.breed,
      dob: bunny.dob,
      age: bunny.age,
    };

    return this.http.post(`${this.URL}/bunny`, savedData);
  }

  loadBunnies() {
    this.getBunnies().subscribe((res) => (this.bunnies = res));
  }

  // deleteBunny(bunny: Bunny): Observable<any> {
  //   return this.http.delete(`${this.URL}/bunny/${bunny.id}`);
  // }

  deleteBunny(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/bunny/${id}`);
  }
  

  getBunnies(): Observable<Bunny[]> {
    return this.http
      .get<Bunny[]>(`${this.URL}/bunnies`)
      .pipe(tap((data) => console.log('Bunnies: ', data)));
  }

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(`${this.URL}/breeds`);
  }
}

//make a function that will delete a bunny
//passes the chosen id into the function associatied with button 
