import { Component } from '@angular/core';
import { Bunny } from '../bunny';

@Component({
  selector: 'app-bunny-form',
  templateUrl: './bunny-form.component.html',
  styleUrls: ['./bunny-form.component.css'],
})

export class BunnyFormComponent {
  bunny: Bunny = {
    id: 1,
    name: '',
    breed: '',
    age: 0,
    weight: 0,
    birthday: '',
  };

  bunnyAdditiondStatus = 'No Buns Added Yet';

  onAddBunny() {
    this.bunnyAdditiondStatus = 'Bunny was added!';
    console.log(this.bunny);
  }
}
