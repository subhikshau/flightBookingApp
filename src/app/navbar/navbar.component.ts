
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  constructor(public auth:AuthService, private router:Router,private fireAuth:AngularFireAuth) { }

  logout(){
    this.fireAuth.signOut().then( () =>{
    localStorage.removeItem('token');
    this.router.navigate(['/user-logout']);
    },err=>{
           alert('Something went wrong')
    })
  }
}
