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
  constructor(public fb: FormBuilder, public bunnyService: BunnyService) {
    
    this.initForm()
  }

   editBunnyForm: FormGroup 


  dobFormControl: FormControl;

  editMode = false;
  editId = 0;
  editName = '';
  editAge = 0;
  editBreed = 0;
  editGender = '';
  editDOB: Date;

  onDeleteBunny(bunny: Bunny) {
    this.bunnyService.deleteBunny(bunny.bunny_id).subscribe((res) => {
      this.bunnyService.loadBunnies();
      console.log(res);
    });
  }

  updateDate($e) {
    console.log($e);
  }

  editBunny(bunny: Bunny) {
    console.log(bunny);

    this.editMode = true;
    this.editId = bunny.bunny_id;
    this.editName = bunny.name;

    this.editBunnyForm.controls['name'].setValue(bunny.name)
    this.editAge = bunny.age;

    this.editBreed = bunny.breed;
    this.editBunnyForm.controls['breed'].setValue(bunny.breed)

    this.editGender = bunny.gender;
    this.editBunnyForm.controls['gender'].setValue(bunny.gender)

    this.editDOB = bunny.dob;
    this.editBunnyForm.controls['dob'].setValue(bunny.dob)

    

  }
  onEditCancel() {
    this.editMode = false;
  }

  onUpdateBunny() {
    console.log('Editing Name: ' + this.editName);
    console.log(this.dobFormControl.value);
    
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
    });
  }
}
