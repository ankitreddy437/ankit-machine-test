import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
create(){

}
}
