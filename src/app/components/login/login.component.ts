import { AuthenticationService } from './../../services/authentcation.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthenticationService:AuthenticationService,private _Router:Router) { }
 loginForm:FormGroup=new FormGroup({
    'email': new FormControl(null,[Validators.required,Validators.email]),
    'password': new FormControl(null,[Validators.required])
    
  })
  login(){
    if(this.loginForm.invalid)
    return;
    console.log(this.loginForm);
    this._AuthenticationService.signIn(this.loginForm.value).subscribe((data)=>{
      if(data.message =="success"){
        localStorage.setItem("token",data.token)
        this._Router.navigateByUrl('/home')
      }
      else{
        alert(data.message);
        this.loginForm.reset();
      }
    })
  }
  ngOnInit(): void {
  }

}
