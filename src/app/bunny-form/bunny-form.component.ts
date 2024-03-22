import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bunny } from '../bunny';

@Component({
  selector: 'app-bunny-form',
  templateUrl: './bunny-form.component.html',
  styleUrls: ['./bunny-form.component.css'],
})
export class BunnyFormComponent implements OnInit {
  
  bunnies: Bunny[] = [];
  bunnyForm: FormGroup;
  // isformSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  bunnyAdditiondStatus = 'No Buns Added Yet';

  onAddBunny() {
    
    this.bunnyAdditiondStatus = 'Bunny was added!';
    console.log(this.bunnyForm);
    // this.isformSubmitted = true
    this.bunnies.push({ ...this.bunnyForm.value });
    this.bunnyForm.reset();
    //logic check isthis.bunny form valid else mark all touched.
  }

  onSubmitForm() {
    console.log('Submitted');
  }

  //private function to init data
  private initForm() {
    this.bunnyForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      gender: this.fb.control(''),
      breed: this.fb.control(''),
      age: this.fb.control(0),
      weight: this.fb.control(0),
    });
  }
}
