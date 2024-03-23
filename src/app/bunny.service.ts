import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { exhaustMap, filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { Bunny } from './bunny';
import { BunnySubmission } from './bunny-form/bunny-form.component';

@Injectable({
  providedIn: 'root',
})
export class BunnyService {
  private bunnies: BehaviorSubject<Bunny[]> = new BehaviorSubject([]);
  public bunnies$ = this.bunnies.asObservable();

  constructor(private http:HttpClient){
  }

  addBunny(bunny: BunnySubmission):Observable<Bunny> {
    //in practice id gets generated on backend 
    let id:number;
    let latestBunnies:Bunny[];
     return of(bunny).pipe(
      withLatestFrom(this.bunnies),
      map(([bunny,bunnies])=>{
        id = bunnies.length?bunnies.at(-1).id+1:1
        latestBunnies=bunnies;
        return {...bunny,id}as Bunny}),
      exhaustMap((bunny:Bunny)=>this.http.post("/api/bunnies",bunny).pipe(
        tap(()=>this.bunnies.next([...latestBunnies,{...bunny,id}])),
        map((bunny:Bunny)=>bunny)
      )))

  }

  getBunnies():Observable<Bunny[]>{
    // if(this.bunnies.length){
    //   return of(this.bunnies)
    // }
    return this.http.get("/api/bunnies").pipe(
      withLatestFrom(this.bunnies),
      filter(([_,bunnies])=>bunnies.length>0),
      map(([bunnyList,_])=>bunnyList),
      tap((bunnyList:Bunny[])=>this.bunnies.next(bunnyList))
    )
  }
}
