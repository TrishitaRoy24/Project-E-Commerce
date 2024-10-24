import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  url: string = "https://fakestoreapi.com/products?limit=5";

  constructor(private http: HttpClient) { }

  getFeaturedProduct(){
    return this.http.get<any[]>(this.url);
  }
}
