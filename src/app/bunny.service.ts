import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators'
import { Bunny } from './bunny';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class BunnyService {
  public bunnies: Bunny[] = [];

  constructor(public http: HttpClient) {}

  addBunny(bunny: Bunny) {
    const newBunny = { ...bunny };
    this.bunnies.push(newBunny);
    console.log(newBunny);
    
    return newBunny;
  }

  // getBunnies() returns an Observable of an array of Bunny objects. 
  getBunnies(): Observable<Bunny[]> {
    return this.http.get<Bunny[]>('http://localhost:3000/posts').pipe(
      tap((data)=> console.log(data)
      ),
      map(res => res['posts']    
      )
    )
  }
}