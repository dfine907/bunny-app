import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Bunny, Breed } from './bunny';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BunnyService {
  public bunnies: Bunny[] = [];
  public breeds: Breed[] = [];

  public getBreedById(id: number) {
    return this.breeds.find(b => b.breed_id == id)?.breed_name
  }

  constructor(public http: HttpClient) {
    this.getBunnies().subscribe((res) => (this.bunnies = res));
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

    return this.http.post('http://localhost:3000/bunny', savedData)
  }

  getBunnies(): Observable<Bunny[]> {
    return this.http
      .get<Bunny[]>('http://localhost:3000/bunnies')
      .pipe(tap((data) => console.log(data)));
  }

  getBreeds(): Observable<Breed[]> {
    return this.http
      .get<Breed[]>('http://localhost:3000/breeds')
      .pipe(tap((data) => console.log(data)));
  }

  refetchBunnies() {
    this.getBunnies().subscribe((res) => (this.bunnies = res));
  }
  
  refetchBreeds() {
    this.getBreeds().subscribe((res) => (this.breeds = res));
  }

  reLoadBunnyData() {
    this.refetchBunnies()
    this.refetchBreeds()
  }

}

//make a function that will delete a button when delete 
//passes the chosen id into the function associatied with button and deletes
