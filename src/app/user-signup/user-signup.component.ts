import { Component , OnInit} from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  formData = {name:"" , email:"", password:""}
  name : string =''
  email : string=''
  password : string =''
  submit=false;
  constructor(private auth:AuthService) {}
  ngOnInit(): void {
      
  }
  signup(){
    if(this.name == ''){
      alert('please enter name');
      return ;
    }
    if(this.email == '') {
      alert('please enter email');
      return;
    }
    if(this.password == ''){
      alert('please enter password');
      return;
    }
    this.auth.signup(this.name,this.email,this.password);
    this.name="";
    this.email='';
    this.password='';
     
  }
  }  