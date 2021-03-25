import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalsResponseModel } from 'src/app/models/rentals/rentalsResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalsService {

  apiUrl = 'https://localhost:44369/api/rentals/getall';

  constructor(private httpClient: HttpClient) {}
  getRentals(): Observable<RentalsResponseModel> {
    return this.httpClient.get<RentalsResponseModel>(this.apiUrl);
  }
}
