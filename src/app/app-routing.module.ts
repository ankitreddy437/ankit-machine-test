import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';
import { EventFormComponent } from './event-form/event-form.component'


const routes: Routes = [
  {path:"", component:EventFormComponent},
  {path:"event", component:EventFormComponent},
  {path:"**", component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
