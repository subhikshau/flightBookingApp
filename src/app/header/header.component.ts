import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: any;
  showName: any;
  constructor () {}
  ngOnInit(): void {
      if(localStorage.getItem('name')){
        this.name=localStorage.getItem('name')
        this.showName=true;
      }else{
        this.showName=false;
      }
  }
}
