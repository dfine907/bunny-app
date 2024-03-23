import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { exhaustMap, map, tap, withLatestFrom } from 'rxjs/operators';
import { Bunny } from './bunny';
import { BunnySubmission } from './bunny-form/bunny-form.component';

@Injectable({
  providedIn: 'root',
})
export class BunnyService {
  private bunnies: BehaviorSubject<Bunny[]> = new BehaviorSubject([]);
  public bunnies$ = this.bunnies.asObservable();

  constructor(private http: HttpClient) {}

  addBunny(bunny: BunnySubmission): Observable<Bunny> {
    return of(bunny).pipe(
      exhaustMap((bunny: BunnySubmission) =>
        this.http.post('/api/bunnies', bunny).pipe(
          withLatestFrom(this.bunnies),
          tap(([bunny, bunnies]: [Bunny, Bunny[]]) =>
            this.bunnies.next([...bunnies, bunny])
          ),
          map(([bunny, _]) => bunny)
        )
      )
    );
  }

  getBunnies(): Observable<Bunny[]> {
    return this.http.get('/api/bunnies').pipe(
      withLatestFrom(this.bunnies),
      map(([response, bunnies]) => (!bunnies.length ? response : bunnies)),
      tap((bunnyList: Bunny[]) => {
        this.bunnies.next(bunnyList);
      }),
      tap((b) => console.log('IS_THIS_WORKING', b))
    );
  }
}
