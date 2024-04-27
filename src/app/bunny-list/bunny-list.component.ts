import { Component } from '@angular/core';
import { BunnyService } from '../bunny.service';
import { Bunny } from '../bunny';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bunny-list',
  templateUrl: './bunny-list.component.html',
  styleUrls: ['./bunny-list.component.css'],
})
export class BunnyListComponent {
editBunnyForm: FormGroup;
editMode = false;
editId = 0;

constructor(private fb: FormBuilder, public bunnyService: BunnyService){
  this.editBunnyForm = this.fb.group({
    name: ["", Validators.required],
    age: [""],
    breed: [""],
    gender: [""],
    dob: ["", Validators.required],
    bunny_id: [""]
  })
}

  onDeleteBunny(bunny: Bunny) {
    this.bunnyService.deleteBunny(bunny.bunny_id).subscribe((res) => {
      this.bunnyService.loadBunnies();
      console.log(res);
    });
  }

  updateDate($event) {
    console.log($event);
  }

  editBunny(bunny: Bunny) {
    console.log("hitting", {bunny});

    this.editMode = true;
    this.editId = bunny.bunny_id;
    this.editBunnyForm.setValue({
      name: bunny.name,
      age: bunny.age,
      breed: bunny.breed,
      gender: bunny.gender,
      dob: bunny.dob,
      bunny_id: bunny.bunny_id
    })
    
  
    

  }
  onCancelEdit() {
    this.editMode = false;
  }

 onUpdateBunny() {
  if (this.editBunnyForm.valid) {
    const bunnyId = this.editBunnyForm.value.bunny_id; // Ensure this is set when editing
    this.bunnyService.updateBunny(bunnyId, this.editBunnyForm.value).subscribe({
      next: (res) => {
        console.log('Update successful:', res);
        this.bunnyService.loadBunnies();
        this.editMode = false;
        this.editBunnyForm.reset();
      },
      error: (err) => console.error('Failed to update bunny:', err)
    });
  } else {
    console.error('Form is invalid');
  }
}


  private initForm() {
    this.editBunnyForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      gender: this.fb.control(''),
      breed: this.fb.control(''),
      age: this.fb.control(''),
      dob: this.fb.control('',
        Validators.required
      ),
      bunny_id: this.fb.control('')
    });
  }
}
