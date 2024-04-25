import { Component } from '@angular/core';
import { BunnyService } from '../bunny.service';
import { Bunny } from '../bunny';

@Component({
  selector: 'app-bunny-list',
  templateUrl: './bunny-list.component.html',
  styleUrls: ['./bunny-list.component.css'],
})
export class BunnyListComponent {
  constructor(public bunnyService: BunnyService) {}

  onDeleteBunny(bunny: Bunny) {
    // console.log({ bunny });

    this.bunnyService.deleteBunny(bunny.bunny_id).subscribe((res) => {
      this.bunnyService.loadBunnies();
      console.log(res);
    });
  }
}
