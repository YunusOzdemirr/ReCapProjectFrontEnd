import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rentals } from 'src/app/models/rentals/rentals';

@Injectable({
  providedIn: 'root'
})
export class RentalsService {

  apiUrl = 'https://localhost:44369/api/rentals/getall';

  constructor(private httpClient: HttpClient) {}
  getRentals(): Observable<ListResponseModel<Rentals>> {
    return this.httpClient.get<ListResponseModel<Rentals>>(this.apiUrl);
  }
}
