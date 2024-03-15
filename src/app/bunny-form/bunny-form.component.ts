import { Component } from '@angular/core';

import { Bunny } from '../bunny';

@Component({
  selector: 'app-bunny-form',
  templateUrl: './bunny-form.component.html',
  styleUrls: ['./bunny-form.component.css']
})
export class BunnyFormComponent {

  bunnyAdditiondStatus = "No Buns Added Yet"

  onAddBunny() {
     this.bunnyAdditiondStatus = "Bunny was added!"
     console.log("Bun added success")
  }


}