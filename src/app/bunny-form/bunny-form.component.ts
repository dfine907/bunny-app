import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BunnyService } from '../bunny.service';
import { Bunny } from '../bunny';

@Component({
  selector: 'app-bunny-form',
  templateUrl: './bunny-form.component.html',
  styleUrls: ['./bunny-form.component.css'],
})
export class BunnyFormComponent implements OnInit {
  bunnyForm: FormGroup;
  formattedDate: string = '';

  constructor(public fb: FormBuilder, public bunnyService: BunnyService) {}

  ngOnInit(): void {
    this.initForm();
  }

  bunnyAdditiondStatus = 'No Buns Added Yet';

  // onAddBunny() {  **WRONG**
  //   this.bunnyService.addBunny(this.bunnyForm.value).subscribe((res) => {
  //     console.log(res);
  //     this.bunnyForm.reset();
  //   });
  // }
 
  onAddBunny() {
    this.bunnyService.addBunny(this.bunnyForm.value).subscribe((res) => {
      this.bunnyService.loadBunnies()
      console.log(res);
      this.bunnyForm.reset();
    });
  }
  
  
 
  onSubmitForm() {
    console.log(this.bunnyService.bunnies, 'Submitted');
  }

  private initForm() {
    this.bunnyForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      gender: this.fb.control(''),
      breed: this.fb.control(''),
      age: this.fb.control(''),
      dob: this.fb.control('',
        Validators.required
      ),
    });
  }
}
