import { Injectable } from '@angular/core';
import { Bunny } from './bunny';
import { Observable, of, tap } from 'rxjs';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root',
})
export class BunnyService {
  private bunnies: Bunny[] = [];

  constructor(private http:HttpClient){
  }

  addBunny(bunny: Bunny):Observable<Bunny> {
   return this.http.post("/api/bunnies",bunny).pipe(tap((bunny:Bunny)=>this.bunnies=[...this.bunnies,bunny]))
  }

  getBunnies():Observable<Bunny[]>{
    if(this.bunnies.length){
      return of(this.bunnies)
    }
    return this.http.get("/api/bunnies").pipe(
      tap((bunnyList:Bunny[])=>this.bunnies=bunnyList)
    )
  }
}
