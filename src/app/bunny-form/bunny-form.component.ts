import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bunny } from '../bunny';
import { BunnyService } from '../bunny.service';

@Component({
  selector: 'app-bunny-form',
  templateUrl: './bunny-form.component.html',
  styleUrls: ['./bunny-form.component.css'],
})
export class BunnyFormComponent implements OnInit {
  bunnies: Bunny[] = [];
  bunnyForm: FormGroup;

  constructor(public fb: FormBuilder, private bunnyService: BunnyService) {}

  private initBunnies() {
    this.bunnyService.getBunnies().subscribe((res) => {
      this.bunnies = res;
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.initBunnies();
  }

  bunnyAdditiondStatus = 'No Buns Added Yet';

  onAddBunny() {
    this.bunnyService.addBunny(this.bunnyForm.value).subscribe((res) => {
      console.log(res);
      this.initBunnies();
      this.bunnyForm.reset();
    });
  }

  onSubmitForm() {
    console.log(this.bunnies, 'Submitted');
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
