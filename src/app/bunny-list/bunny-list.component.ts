import { Component, Input } from '@angular/core';

import { Bunny } from '../bunny';

@Component({
  selector: 'app-bunny-list',
  templateUrl: './bunny-list.component.html',
  styleUrls: ['./bunny-list.component.css'],
})
export class BunnyListComponent {
  @Input() bunnies: Bunny[];
}
