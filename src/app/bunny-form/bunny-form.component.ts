import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Bunny } from '../bunny';

type gender = 'male' | 'female';

export type BunnySubmission = Omit<Bunny, 'id'>;

type BunnyForm = {
  name: FormControl<string>;
  gender: FormControl<gender>;
  breed: FormControl<string>;
  age: FormControl<number>;
  weight: FormControl<number>;
};

@Component({
  selector: 'app-bunny-form',
  templateUrl: './bunny-form.component.html',
  styleUrls: ['./bunny-form.component.css'],
})
export class BunnyFormComponent {
  @Output() newBunnyEvent = new EventEmitter<BunnySubmission>();

  bunnyForm = this.setupBunnyForm();

  bunnyAdditiondStatus = 'No Buns Added Yet';

  // I think need to invoke the class w/ a created constructor for each new instance
  constructor(private fb: NonNullableFormBuilder) {}

  private setupBunnyForm(): FormGroup<BunnyForm> {
    return this.fb.group({
      name: new FormControl('', Validators.required),
      gender: new FormControl('' as gender, Validators.required),
      breed: new FormControl('', Validators.required),
      age: new FormControl(0, Validators.required),
      weight: new FormControl(0, Validators.required),
    });
  }

  onSubmit() {
    this.newBunnyEvent.emit(this.bunnyForm.value as BunnySubmission);
  }
}
