import { Component, OnInit, Input } from '@angular/core';

import { Bunny } from '../bunny';
import { BunnyService } from '../bunny.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bunny-list',
  templateUrl: './bunny-list.component.html',
  styleUrls: ['./bunny-list.component.css'],
})
export class BunnyListComponent implements OnInit {

  bunnies$:Observable<Bunny[]>=this.bunnyService.getBunnies();

  constructor(private bunnyService: BunnyService) {}

  ngOnInit() {
  
  }
}
