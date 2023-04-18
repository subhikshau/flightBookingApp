import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent {
  flights = [];
  constructor(private db: AngularFireDatabase){}
  add(Name:string,flightNumber:string,flightName:string,departureAirport:string,arrivalAirport:string,departureData: string,departureTime: string,price : string){

    const flightDetails = {
      Name,
      flightNumber,
      flightName,
      departureAirport,
      arrivalAirport,
      departureData,
      departureTime,
      price
    };
    this.db.list('bookings').push(flightDetails);
    alert("your ticket is booked successfully")
  }

  

}
