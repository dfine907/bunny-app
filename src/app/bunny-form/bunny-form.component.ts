import { Component } from '@angular/core';
import { Bunny } from '../bunny';
import { BunnyService } from '../bunny.service';

@Component({
  selector: 'app-bunny-form',
  templateUrl: './bunny-form.component.html',
  styleUrls: ['./bunny-form.component.css'],
})
export class BunnyFormComponent {
  
  // I think need to invoke the class w/ a created constructor for each new instance
  constructor(private bunnyService: BunnyService) {}

  bunny: Bunny = {
    id: 1,
    name: '',
    gender: '',
    breed: '',
    age: 0,
    weight: 0,
  };

  bunnyAdditiondStatus = 'No Buns Added Yet';

  onAddBunny() {
    this.bunnyAdditiondStatus = 'Bunny was added!';
    this.bunnyService.addBunny(this.bunny);
  }

  onSubmit() {
    console.log('Submitted');
    console.log(typeof this.bunny);
  }
}
