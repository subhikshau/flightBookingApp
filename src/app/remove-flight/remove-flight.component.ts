import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {take,map} from 'rxjs/operators';

@Component({
  selector: 'app-remove-flight',
  templateUrl: './remove-flight.component.html',
  styleUrls: ['./remove-flight.component.css']
})
export class RemoveFlightComponent {
  constructor(private db: AngularFireDatabase){}

  removeFlight(flightNumber:string,flightName:string,departureAirport:string,arrivalAirport:string,departureData: string,departureTime: string,arrivalData:string,arrivalTime:string,priceInput:string,seatAvailability:string){
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
      alert("Remove successfully");
  }
  


}
