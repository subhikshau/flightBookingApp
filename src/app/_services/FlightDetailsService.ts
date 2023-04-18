import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FlightDetails } from '../models/FlightDetails';

@Injectable({
  providedIn: 'root'
})
export class FlightDetailsService {
  private flightDetailsRef;

  constructor(private db: AngularFireDatabase) {
    this.flightDetailsRef = this.db.list<FlightDetails>('flightDetails');
  }

  getFlightDetails(searchCriteria: keyof FlightDetails, searchTerm: string): Observable<FlightDetails[]> {
    return this.flightDetailsRef.valueChanges().pipe(
      map((flightDetails: FlightDetails[]) => {
        return flightDetails.filter(flightDetail => flightDetail[searchCriteria] === searchTerm);
      })
    );
  }
}
