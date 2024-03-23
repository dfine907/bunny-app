import { Component, Input } from '@angular/core';
import { Bunny } from 'src/app/bunny';

@Component({
  selector: 'app-bunny-detail',
  templateUrl: './bunny-detail.component.html',
  styleUrls: ['./bunny-detail.component.css']
})
export class BunnyDetailComponent {

  @Input({required:true})
  bunny:Bunny
}
