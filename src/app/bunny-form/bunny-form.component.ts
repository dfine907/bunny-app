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

  // onDeleteBunny(bunny: Bunny) {
  //   this.bunnyService.deleteBunny(bunny).subscribe((res) => {
  //     this.bunnyService.loadBunnies()
  //     console.log(res);
  //   })
  // }

  onDeleteBunny(id: number) {
    this.bunnyService.deleteBunny(id).subscribe((res) => {
      this.bunnyService.loadBunnies()
      console.log(res);
      
    })
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
