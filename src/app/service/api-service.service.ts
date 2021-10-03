import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  grtproguct(){
    return this.http.get<any>("https://fakestoreapi.com/products").pipe(map((res:any)=>{
      return res;
    }))
  }
}
