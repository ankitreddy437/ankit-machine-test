import { Component, OnInit } from '@angular/core';
import{ FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
eventsList:any=[];

  constructor(private fb:FormBuilder, public us: UserService, 
    private Router: Router, public http:HttpClientModule) 
    { }

  ngOnInit(): void {
   this.events();
  }

events(){
  
  this.us.getEvent().subscribe(data=>{
        this.eventsList=data;
  }
)}
}
