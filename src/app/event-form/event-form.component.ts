import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormControlName} from '@angular/forms';

import { MatDatetimePickerInputEvent} from '@angular-material-components/datetime-picker';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  form: FormGroup;
  event_name:String | undefined;
  event_organizer:String | undefined;
  event_duration:any;
  event_place:String | undefined;
  
  

  constructor(private _formBuilder: FormBuilder, private us:UserService,private router:Router) {
    this.form = this._formBuilder.group({
     
      event_name:['', Validators.required],
      event_organizer:['', Validators.required],
      event_duration:['', Validators.required],
      event_place:['', Validators.required],
    });
  }

  ngOnInit(): void {
 
  }
create(){
  
  this.us.addEvent(this.form.value).subscribe(data=>{
    console.log(data);
    this.router.navigate(['/eventList']);
  })
}

}
