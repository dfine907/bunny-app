import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BunnyService } from '../bunny.service';

@Component({
  selector: 'app-bunny-form',
  templateUrl: './bunny-form.component.html',
  styleUrls: ['./bunny-form.component.css'],
})
export class BunnyFormComponent implements OnInit {
  bunnyForm: FormGroup;
  formattedDate: string = '';
  @Input() bunnyId?: number;

  constructor(public fb: FormBuilder, public bunnyService: BunnyService) {}

  ngOnInit(): void {
    this.initForm();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes)
  // }

  bunnyAdditiondStatus = 'No Buns Added Yet';

  public submitting: boolean = false;

  onAddBunny() {
    if (this.submitting) {
      return; // <-- GUARD CLAUSE: If submitting is true, return early
    }

    this.submitting = true; // Set submitting to true to indicate submission in progress
    this.bunnyService.addBunny(this.bunnyForm.value).subscribe((res) => {
      this.bunnyService.loadBunnies();
      console.log(res);
      this.bunnyForm.reset();
      this.submitting = false;
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

    this.bunnyForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      gender: this.fb.control(''),
      breed: this.fb.control(''),
      age: this.fb.control(''),
      dob: this.fb.control('', Validators.required),
    });
  }
}
