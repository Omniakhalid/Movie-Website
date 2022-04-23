import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMenu:boolean=true
  constructor(private _Router:Router) {
    let token = localStorage.getItem("token")
    if(token)//logged
      this.showMenu=true;
    else
      this.showMenu=false;
   }
  logout(){
    localStorage.removeItem("token");
    this._Router.navigateByUrl("/login")
  }
  ngOnInit(): void {
  }

}
