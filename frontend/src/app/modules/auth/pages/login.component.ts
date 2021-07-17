import { Component, OnInit } from '@angular/core';
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
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  login():void{
    this.authService.login({username:"admin",password:"admin"}).subscribe(res=>{
      alert("login");
      console.log(res)
    });
    
  }

}
