import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bunny, Breed } from '../bunny';
import { BunnyService } from '../bunny.service';

@Component({
  selector: 'app-bunny-form',
  templateUrl: './bunny-form.component.html',
  styleUrls: ['./bunny-form.component.css'],
})
export class BunnyFormComponent implements OnInit {
  bunnyForm: FormGroup;

  constructor(public fb: FormBuilder, public bunnyService: BunnyService) {}

  ngOnInit(): void {
    this.initForm();
    
  }

  bunnyAdditiondStatus = 'No Buns Added Yet';

  onAddBunny() {
    this.bunnyService.addBunny(this.bunnyForm.value).subscribe((res) => {
      console.log(res);
      
      this.bunnyForm.reset();
    });
  }

  onSubmitForm() {
    const formatDate = (dateString: string): string => {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
      return new Date(dateString).toLocaleDateString('en-US', options);
    };

    console.log(this.bunnyService.bunnies, 'Submitted');
  }

  private initForm() {
    this.bunnyForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      gender: this.fb.control(''),
      breed: this.fb.control(''),
      age: this.fb.control(0),
      dob: this.fb.control(0),
    });
  }
}
