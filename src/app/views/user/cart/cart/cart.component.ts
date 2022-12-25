import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  getingproducts : any [] = []
   public grandtotal  !:number
  constructor(private cartservice : CartService) { }

  ngOnInit(): void {
    this.grandtotal = this.cartservice.getcarTotalPrice()
  this.getProduct()
  this.grandtotal = this.cartservice.getcarTotalPrice()

}

getProduct(){
  this.cartservice.getCartObs().subscribe((data)=> this.getingproducts = data)
  this.cartservice.getcarTotalPrice()
}

deleteproduct(item:   any){this.grandtotal = this.cartservice.getcarTotalPrice()
   this.cartservice.removeProduct(item)
this.cartservice.getcarTotalPrice()
}
emptycart(){
  return this.cartservice.clearCart()
}
no(){
  alert ('no content yet')
}
}