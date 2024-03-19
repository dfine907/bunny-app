import { Component, OnInit, Input } from '@angular/core';
import { Bunny } from '../bunny';
import { BunnyService } from '../bunny.service';

@Component({
  selector: 'app-bunny-list',
  templateUrl: './bunny-list.component.html',
  styleUrls: ['./bunny-list.component.css'],
})
export class BunnyListComponent implements OnInit {

  @Input() bunny: Bunny;

  bunnies: Bunny[
  ];

  constructor(private bunnyService: BunnyService) {}

  ngOnInit() {
    this.bunnies = this.bunnyService.getBunnies();
  }
}
