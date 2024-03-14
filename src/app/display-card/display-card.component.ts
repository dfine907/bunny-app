import { Component } from '@angular/core';

import { Bunny } from '../bunny';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.css']
})
export class DisplayCardComponent {

  bunny: Bunny= {
    id: 1,
    name: "Darwin",
    breed: "Rex",
    age: 3,
    birthday: "April, 10, 2023"
  };
  
}
