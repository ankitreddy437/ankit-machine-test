import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from "./event-list/event-list.component";


const routes: Routes = [
  {path:"", component:EventListComponent},
  {path:"eventList", component:EventListComponent},
  {path:"createEvent", component:EventFormComponent},
  {path:"**", component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
