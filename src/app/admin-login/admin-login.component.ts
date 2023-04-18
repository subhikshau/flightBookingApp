import { Component,OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  email : string ='';
  password : string = '';
  submit=false;

  constructor (private auth:AuthService){}
  ngOnInit(): void {
      
  }
  alogin(email: string, password: string): void {
    this.auth.alogin(email, password);
    
  }
}


