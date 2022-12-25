import { trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id:any
  data: any = []
  cartproducts : any [] = []

  constructor(  private route : ActivatedRoute , public api : ApiService , public cartServices : CartService) { }
  addbutton:boolean = false
  buy:boolean = false
  item = new EventEmitter()
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getproductid()
  
  }



  getproductid(){
    this.api.getproductbyid(this.id).subscribe(res => 
      this.data = res)
  
  }
  // add to local storage
add(){
this.cartServices.addProduct(this.data)
// localStorage.setItem("cart"  , JSON.stringify(data))



// if("cart" in localStorage){
//   this.cartproducts = JSON.parse(localStorage.getItem("add")!)
//   this.cartproducts.push(data)
//   localStorage.setItem("add",  JSON.stringify(this.data))
  
// }
// else{
//   this.cartproducts.push(this.data)
//   localStorage.setItem("add" , JSON.stringify(this.data))

// }
//   console.log(this.data)
}



}
