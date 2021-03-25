import { Component, OnInit } from '@angular/core';
import { Rentals } from 'src/app/models/rentals/rentals';
import { RentalsService } from 'src/app/services/rentalsService/rentals.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {

  rentals: Rentals[] = [];
  dataLoaded = false;
  constructor(private rentalsService: RentalsService) {}

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals() {
    this.rentalsService.getRentals().subscribe((response) => {
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }

}
