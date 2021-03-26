import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44369/api/';

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath= this.apiUrl+"cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
   }
   getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>> {
     let newPath=this.apiUrl+"cars/getCarsByBrandId?brandId="+brandId;
     return this.httpClient.get<ListResponseModel<Car>>(newPath)
   }
   getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>> {
    let newPath= this.apiUrl+"cars/getCarsByColorId?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }
}
