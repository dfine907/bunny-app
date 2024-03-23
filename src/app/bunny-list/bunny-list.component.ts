import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Bunny } from '../bunny';
import { BunnySubmission } from '../bunny-form/bunny-form.component';
import { BunnyService } from '../bunny.service';

@Component({
  selector: 'app-bunny-list',
  templateUrl: './bunny-list.component.html',
  styleUrls: ['./bunny-list.component.css'],
})
export class BunnyListComponent {

  bunnies$:Observable<Bunny[]>=this.bunnyService.getBunnies();

  constructor(private bunnyService: BunnyService) {}

  

  addBunny(bunny:BunnySubmission){
    this.bunnyService.addBunny(bunny).pipe(
    tap(()=>alert("Added Bunny Successfully! You can come up with using a toast service to notify user of successfull submission")),
    take(1)).subscribe();
  }

}
