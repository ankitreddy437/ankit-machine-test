import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatetimePickerInputEvent} from '@angular-material-components/datetime-picker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule,FormsModule}from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventFormComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDatetimePickerInputEvent

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
