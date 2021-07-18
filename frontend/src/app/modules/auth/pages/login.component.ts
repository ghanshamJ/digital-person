import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { PersonService } from 'src/app/core/services/person.service';

@Component({
  selector: 'app-login',
  templateUrl:'login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  username:any;
  password:any;
  errorMsg:string="";
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login():void{
    if(!this.username){
     this.errorMsg = "Please enter username!";
      return;
    }
    if(!this.password){
      this.errorMsg = "Please enter password!";
       return;
    }
    this.errorMsg=""
    this.authService.login({username:this.username,password:this.password}).subscribe(res=>{
      this.authService.setToken(res.accessToken);
      console.log("success")
      this.router.navigate(['persons-list'])

    },err=>{
      this.authService.setToken("");
      console.log("failed")
    });
  }
}
