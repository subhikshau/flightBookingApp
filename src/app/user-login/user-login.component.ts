import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  email : string ='';
  password : string = '';
  submit=false;

  constructor (private auth:AuthService){}
  ngOnInit(): void {
      
  }
  login() {
    if(this.email == '') {
      alert('please enter email');
      return;
    }
    if(this.password == ''){
      alert('please enter password');
      return;
    }
    this.auth.login(this.email,this.password);
    this.email='';
    this.password='';
}  

}