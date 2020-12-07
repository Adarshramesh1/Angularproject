
import { Component, OnInit } from '@angular/core';
import { CheckService } from '../check.service';
 
import {FormBuilder} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string='';
  password:string='';
  details:any=[];
  flag=false;
  error:string='';
  constructor(private _check:CheckService, private router:Router, private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.details=this._check.getUserdetails();
  }
  loguser(data:any)
  {
    this.user=data.name
    this.password=data.password
    for(let emp of this.details)
    {
      if(this.user==emp.username)
      {
        if(this.password==emp.password)
        {
          
          
          this.router.navigate(['./home',this.user]);
        }
      }else{
        this.flag=true;
        this.error="Invalid username or password!"
      }
    }
  }
 
}