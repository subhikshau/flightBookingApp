import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-filterflight',
  templateUrl: './filterflight.component.html',
  styleUrls: ['./filterflight.component.css']
})
export class FilterflightComponent {
  flights: Observable<any[]>;
  filteredFlights: any[] = [];

  departureAirport: string = "";
  arrivalAirport: string = "";
  departureData: string = "";
  arrivalData: string = "";
  departureTime: string = "";
  arrivalTime: string = "";

  constructor(private db: AngularFireDatabase, private auth: AuthService) {
    this.flights = this.db.list('flightDetails').valueChanges();
  }

  filterFlights(departureAirport: string, arrivalAirport: string, departureData: string, departureTime: string) 
   {
    this.flights.subscribe(data => {
      this.filteredFlights = data.filter(flight =>
        flight.departureData === this.departureData &&
        flight.departureTime === this.departureTime
      );
    });
  }

  onBookClick(flightDetails: any) {
    // Convert seat availability to integer
    const currentSeatAvailability = parseInt(flightDetails.seatAvailability, 10);
    const userEmail = prompt('Please enter your email address:');
    const userName = prompt('Please enter your name:');

    if (!userEmail || !userName) {
      alert('Please enter a valid email address and name.');
      return;
    }

    if (60 - currentSeatAvailability <= 0) {

      alert('Sorry, the flight is fully booked.');
    } else {
      alert('ticket is booked successsfully kindly enter your airport details in user booking form for confirm the booking');
    }
  }

}
