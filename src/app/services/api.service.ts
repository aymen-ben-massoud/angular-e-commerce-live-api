import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http :HttpClient) { }
  getall(){
    return this.http.get<any>("https://fakestoreapi.com/products")
  }
  getcategories(){
    return this.http.get<any>("https://fakestoreapi.com/products/categories")
  }
  getproductbyname(keyword:any){
    return this.http.get<any>("https://fakestoreapi.com/products/category/"+keyword)
  }
    
  getproductbyid(id:any){
    return this.http.get<any>("https://fakestoreapi.com/products/"+id)
  }
  searching(search : any){
  return this.http.get("api don't exist"+search)
}
 
}
