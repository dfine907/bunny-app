import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Bunny } from '../bunny';
import { BunnySubmission } from '../bunny-form/bunny-form.component';
import { BunnyService } from '../bunny.service';

@Component({
  selector: 'app-bunny-list',
  templateUrl: './bunny-list.component.html',
  styleUrls: ['./bunny-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BunnyListComponent implements OnInit {
  bunnies$: Observable<Bunny[]> = this.bunnyService.bunnies$;

  constructor(private bunnyService: BunnyService) {}
  ngOnInit(): void {
    this.bunnyService.getBunnies().pipe(take(1)).subscribe();
  }

  addBunny(bunny: BunnySubmission) {
    this.bunnyService
      .addBunny(bunny)
      .pipe(
        take(1),
        tap(() =>
          alert(
            'Added Bunny Successfully! You can come up with using a toast service to notify user of successfull submission'
          )
        )
      )
      .subscribe();
  }
}
