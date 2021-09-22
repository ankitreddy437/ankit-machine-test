import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';
 

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(public http:HttpClient,) { }
api = environment.api_url;

getEvent(){
  return this.http.get(`${this.api}/event`);
}

addEvent(data:any){
  const headers= new HttpHeaders({ 'Content-Type': 'application/json'})
  return this.http.post(`${this.api}/event`,data,{headers:headers})
}
updateEvent(){

}

deleteEvent(){

}

}