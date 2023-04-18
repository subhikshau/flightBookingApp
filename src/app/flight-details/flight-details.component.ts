import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {take,map} from 'rxjs/operators';
@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent {
  flights = [];
  constructor(private db: AngularFireDatabase){}
  addFlight(flightNumber:string,flightName:string,departureAirport:string,arrivalAirport:string,departureData: string,departureTime: string,arrivalData:string,arrivalTime:string,price : string,seatAvailability:string){

    const flightDetails = {
      flightNumber,
      flightName,
      departureAirport,
      arrivalAirport,
      departureData,
      departureTime,
      arrivalData,
      arrivalTime,
      price,
      seatAvailability
    };
    this.db.list('flightDetails').push(flightDetails);
    alert("add successfully")
  }
  removeFlight(flightNumber:string,departureAirport:string,arrivalAirport:string,departureData: string,departureTime: string,arrivalData:string,arrivalTime:string,seatAvailability:number){
    this.db.list('flightDetails', ref => ref.orderByChild('flightNumber').equalTo(flightNumber))
      .snapshotChanges()
      .pipe(
        take(1),
        map(changes => {
          const key = changes[0].payload.key;
          return key;
        })
      )
      .subscribe(key => {
        if(key)
        this.db.list('flightDetails').remove(key);
      });
  }
  
  
  
}
