import { Component } from '@angular/core';


@Component({
  selector: 'app-listed-cards',
  templateUrl: './listed-cards.component.html',
  styleUrls: ['./listed-cards.component.css']
})

export class ListedCardsComponent {
  bunnyId = 10;
  bunnyStatus = "not added"

  getBunStatus() {
    return this.bunnyStatus
  }
}
