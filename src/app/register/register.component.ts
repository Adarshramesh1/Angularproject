import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CheckService } from '../check.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(private _check:CheckService, private router:Router, private route:ActivatedRoute) { }
  details:any=[]
  a:any=[]
  public user=""
  
  ngOnInit(): void {
    this.details=this._check.getUserdetails();
  }
  reguser(data:any)
  {
    this._check.a.push( {id:data.id,name:data.name,username:data.username,password:data.password,salary:data.salary})
    this.a=this._check.getUserdetails()
    console.log(this._check.a)
    for(let emp of this.a)
    {
      if(data.username==emp.username)
      {
        if(data.password==emp.password)
        {
          
          this.user=data.username;
          this.router.navigate(['./home',this.user])

        }
      }
    }
    
  }
  
 
}