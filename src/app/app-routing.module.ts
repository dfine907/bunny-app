import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BunnyFormComponent } from './bunny-form/bunny-form.component';
import { MoreInfoComponent } from './more-info/more-info.component';

const routes: Routes = [
  {path: 'moreinfo', component: MoreInfoComponent},
  { path: 'bunnyform', component: BunnyFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
