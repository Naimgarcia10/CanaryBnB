import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  destination: string;
  checkInDate: string;
  checkOutDate: string;
  people: number;

  confirmSearch() {
    console.log(this.destination, this.checkInDate, this.checkOutDate, this.people);
  }

  constructor() { }

  ngOnInit() {}

}
