export class Reservation {
  hotelName: string;
  hotelImage: string;
  checkInDate: Date;
  checkOutDate: Date;
  numberOfPeople: number;
  reservationNumber: string;

  constructor() {
    this.hotelName = '';
    this.hotelImage = '';
    this.checkInDate = new Date();
    this.checkOutDate = new Date();
    this.numberOfPeople = 0;
    this.reservationNumber = '';
  }
}
