import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CheckService } from '../check.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  details:any=[];
  nameuser:string=''
  user:string=''
  pass:string=''
  name:string=''
  id:number=0
  salary:number=0
  constructor(private _check:CheckService,private router : Router ,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.details=this._check.getUserdetails();
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let name=params.get('user');
      this.nameuser=name;
    });
    for(let emp of this.details)
    {
      if(emp.username==this.nameuser){
      this.user=emp.username
      this.pass=emp.password
      this.name=emp.name
      this.id=emp.id
      this.salary=emp.salary 
      }
    }
  }
 
}