import { Component } from '@angular/core';
import { BunnyService } from '../bunny.service';
import { Bunny } from '../bunny';
import { ModalService } from '../modal.service';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bunny-list',
  templateUrl: './bunny-list.component.html',
  styleUrls: ['./bunny-list.component.css'],
})
export class BunnyListComponent {
  constructor(
    public fb: FormBuilder,
    public bunnyService: BunnyService,
    public modalService: ModalService
  ) {}

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
    this.modalService.open('modal-1');
  }
}
