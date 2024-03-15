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
    birthday: '',
    gender: '',
    breed: '',
    age: 0,
    weight: 0,
    
  };


  bunnyAdditiondStatus = 'No Buns Added Yet';


  onAddBunny() {
    this.bunnyAdditiondStatus = 'Bunny was added!';
    console.log(this.bunny.name, this.bunny.age, this.bunny.birthday);
  }

  onSubmit() {
    console.log("Submitted")
  }
}
