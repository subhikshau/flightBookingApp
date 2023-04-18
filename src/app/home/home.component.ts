import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  notAuthenticationText = 'Please log in to book your tickets.';
  authenticationText = 'Thank you for logging in. Book your tickets soon.';


  constructor(public auth:AuthService) { }

}
    

