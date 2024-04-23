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

  // onAddBunny() {
  //   this.bunnyService.addBunny(this.bunnyForm.value).subscribe((res) => {
  //     console.log(res);

  //     this.bunnyForm.reset();
  //   });
  // }
 //refresh from the backend :
  onAddBunny() {
    this.bunnyService.addBunny(this.bunnyForm.value).subscribe((res) => {
      this.bunnyService.loadBunnies()
      // this.bunnyService.bunnies.push(this.bunnyForm.value);
      console.log(res);
      this.bunnyForm.reset();
    });
  }

  onDeleteBunny(bunny: Bunny) {
    this.bunnyService.deleteBunny(bunny).subscribe((res) => {
      this.bunnyService.loadBunnies()
      console.log(res);
      
    })
  }
 
  onSubmitForm() {
    // const formatDate = (dateString: string): string => {
    //   const options: Intl.DateTimeFormatOptions = {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric',
    //   };
    //   return new Date(dateString).toLocaleDateString('en-US', options);
    // };
    console.log(this.bunnyService.bunnies, 'Submitted');
  }
  // **

  // onSubmitForm() {
  //     // const dobValue = this.bunnyForm.get('dob').value; // Get dob value from form
  //     // this.formattedDate = this.formatDate(dobValue); // Format date and set to formattedDate

  //     console.log("Form Submitted");

  //   }

  // private formatDate(dateString: string): string {
  //   const options: Intl.DateTimeFormatOptions = {
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //   };
  //   return new Date(dateString).toLocaleDateString('en-US', options);
  // }

  private initForm() {
    this.bunnyForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      gender: this.fb.control(''),
      breed: this.fb.control(''),
      age: this.fb.control(''),
      dob: this.fb.control(
        [new Date().toISOString().substring(0, 10)],
        Validators.required
      ),
    });
  }
}
