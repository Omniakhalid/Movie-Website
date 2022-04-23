import { AuthenticationService } from './../../services/authentcation.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private _AuthenticationService:AuthenticationService,private _Router:Router) { }
  registerForm:FormGroup=new FormGroup({
    'first_name': new FormControl(null,[Validators.required,Validators.minLength(3)]),
    'last_name': new FormControl(null,[Validators.required,Validators.minLength(3)]),
    'email': new FormControl(null,[Validators.required,Validators.email]),
    'password': new FormControl(null,[Validators.required])
    
  })
  register(){
    if(this.registerForm.invalid)
      return;
    console.log(this.registerForm);
    this._AuthenticationService.signUp(this.registerForm.value).subscribe((data)=>{
      if(data.message =="success"){
        this._Router.navigateByUrl('/login')
      }
      else{
        alert(data.message);
        this.registerForm.reset();

      }
    })
    
  }

  ngOnInit(): void {
  }

}
