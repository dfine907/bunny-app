import { Component, OnInit } from '@angular/core';

import { Bunny } from '../bunny';
import { BunnyService } from '../bunny.service';

@Component({
  selector: 'app-bunny-list',
  templateUrl: './bunny-list.component.html',
  styleUrls: ['./bunny-list.component.css'],
})
export class BunnyListComponent implements OnInit {

  bunnies: Bunny[];
  constructor(public bunnyService: BunnyService) {}

  ngOnInit() {
    this.bunnyService.getBunnies().subscribe((bunnies: Bunny[]) => {
      this.bunnies = bunnies;
    });
  }
}
