export class FlightDetails {
    departureTime: string;
    departureDate: string;
    arrivalTime: string;
    arrivalDate: string;
    departureAirport: string;
    arrivalAirport: string;
    flightNumber: string;
    flightName: string;

    constructor(data: any) {
        this.departureTime = data.departureTime;
        this.departureDate = data.departureDate;
        this.arrivalTime = data.arrivalTime;
        this.arrivalDate = data.arrivalDate;
        this.departureAirport = data.departureAirport;
        this.arrivalAirport = data.arrivalAirport;
        this.flightNumber = data.flightNumber;
        this.flightName = data.flightName;
    }
}

  