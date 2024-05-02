import { Component, OnInit } from '@angular/core';
import { BunnyService } from '../bunny.service';
import { Bunny } from '../bunny';
import { ModalService } from '../modal.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bunny-list',
  templateUrl: './bunny-list.component.html',
  styleUrls: ['./bunny-list.component.css'],
})
export class BunnyListComponent implements OnInit {
  bunnyForm: FormGroup;
  currentEditBunny = 0;

  constructor(
    public fb: FormBuilder,
    public bunnyService: BunnyService,
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onDeleteBunny(bunny: Bunny) {
    this.bunnyService.deleteBunny(bunny.bunny_id).subscribe((res) => {
      this.bunnyService.loadBunnies();
      console.log(res);
    });
  }

  editBunny(bunny: Bunny) {
    this.currentEditBunny = bunny.bunny_id;
    this.modalService.open('modal-1');
    //set the values for form control
    // this.bunnyService.getBunny(this.currentEditBunny).subscribe((bun) => {
    //   this.bunnyForm.controls['name'].setValue(bun.name);
    // });
    this.bunnyForm.controls["name"].setValue(bunny.name)
    this.bunnyForm.controls["gender"].setValue(bunny.gender)
    this.bunnyForm.controls["age"].setValue(bunny.age)
    this.bunnyForm.controls["breed"].setValue(bunny.breed)
    this.bunnyForm.controls["dob"].setValue(bunny.dob)

  }

  saveChangeBunny() {
    
    const bun = {...this.bunnyForm.value, bunny_id: this.currentEditBunny}
    this.bunnyService.updateBunny(bun).subscribe((res) => {
      this.bunnyService.loadBunnies();
      console.log(res);
      this.bunnyForm.reset();
    });
  }

  initForm() {
    this.bunnyForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      gender: this.fb.control(''),
      breed: this.fb.control(''),
      age: this.fb.control(''),
      dob: this.fb.control('', Validators.required),
    });
  }
}
