
import { Injectable } from '@angular/core';
 

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  public a=[{"id":1,"name":'Adarsh',"username":'user1',"password":123,"salary":10000},
  
  {"id":4,"name":'Rajeev',"username":'A-9691',"password":'arajca',"salary":10000},
  {"id":5,"name":'Veena',"username":'A-9692',"password":'kunji',"salary":10000},
  {"id":6,"name":'Gautham',"username":'A-9693',"password":'afsakk',"salary":10000}]
  
  
  constructor() { }
  getUserdetails(){
      return this.a
  }
  
}
