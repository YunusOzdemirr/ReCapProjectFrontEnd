import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand/brand';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44369/api/';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'brands/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Brand>>{
    let newPath = this.apiUrl + 'brands/getCarsByBrandId?brandId='+brandId;
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
