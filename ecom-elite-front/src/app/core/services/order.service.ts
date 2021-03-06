import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {OrderModel} from '../models/order.model';
import {ProductModel} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private readonly http: HttpClient) { }
  
  getOrders(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>('/order-api/orders');
  }
}
