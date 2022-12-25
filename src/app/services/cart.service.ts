import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

public search = new BehaviorSubject<string>("");
  constructor() { }
 private readonly cart$ = new BehaviorSubject<any[]>(this.getProduct());
 addProduct(product:any){
  this.cart$.next([...(this.cart$.value || []),product]);
  localStorage.setItem('cart' , JSON.stringify(this.cart$.value));
 }
removeProduct(product : any){
 
  const cart = this.cart$?.value.filter((item)=> item.id !== product.id);
  this.cart$.next(cart);
  localStorage.setItem('cart' , JSON.stringify(cart))
  this.getcarTotalPrice()
}
clearCart(){
  this.cart$.next([]);
  localStorage.removeItem('cart');

}
getcart(){
  return this.cart$.getValue();
}
get cartCount(){
return this.cart$?.value?.length;
}
getcarTotalPrice(){
  return this.cart$.value.reduce((acc, item)=> acc + item.price, 0);

}
getProduct(){
  return JSON.parse(localStorage.getItem('cart')!)
}
getCartObs = () => this.cart$.asObservable();

}
