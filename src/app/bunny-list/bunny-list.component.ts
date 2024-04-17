import { Component } from '@angular/core';
import { BunnyService } from '../bunny.service';

@Component({
  selector: 'app-bunny-list',
  templateUrl: './bunny-list.component.html',
  styleUrls: ['./bunny-list.component.css'],
})
export class BunnyListComponent {
  constructor(public bunnyService: BunnyService) {}
}
