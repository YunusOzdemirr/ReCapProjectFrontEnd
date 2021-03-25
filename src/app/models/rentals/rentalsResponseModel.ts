import { ResponseModel } from '../responseModel';
import { Rentals } from './rentals';

export interface RentalsResponseModel extends ResponseModel {
  data: Rentals[];
}
