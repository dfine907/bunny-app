import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  @Input()bunnyId?: number;

  constructor(public fb: FormBuilder, public bunnyService: BunnyService) {}

  ngOnInit(): void {
    this.initForm();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  // }

  bunnyAdditiondStatus = 'No Buns Added Yet';

  onAddBunny() {
    this.bunnyService.addBunny(this.bunnyForm.value).subscribe((res) => {
      this.bunnyService.loadBunnies();
      console.log(res);
      this.bunnyForm.reset();
    });
  }

  onSubmitForm() {
    console.log(this.bunnyService.bunnies, 'Submitted');
  }

  private initForm() {
    
    // if (this.bunnyId) {
    //   this.bunnyService.getBunny(this.bunnyId).subscribe((bunnyData) => {
    //     this.bunnyForm = this.fb.group({
    //       name: this.fb.control(bunnyData.name, Validators.required),
    //       gender: this.fb.control(bunnyData.gender),
    //       breed: this.fb.control(bunnyData.breed),
    //       age: this.fb.control(bunnyData.age),
    //       dob: this.fb.control(bunnyData.dob, Validators.required),
    //     });
    //   })

      
    // } else {
      this.bunnyForm = this.fb.group({
        name: this.fb.control('', Validators.required),
        gender: this.fb.control(''),
        breed: this.fb.control(''),
        age: this.fb.control(''),
        dob: this.fb.control('', Validators.required),
      });
    // }
  }
}
