import { Component, OnInit, Input } from '@angular/core';

import { Bunny } from '../bunny';


@Component({
  selector: 'app-bunny-list',
  templateUrl: './bunny-list.component.html',
  styleUrls: ['./bunny-list.component.css'],
})

export class BunnyListComponent implements OnInit {
  @Input() bunnies: Bunny []

  // bunnies: Bunny[];

  constructor() {}

  ngOnInit() {
    // this.bunnies = this.bunnyService.getBunnies();
  }
}
