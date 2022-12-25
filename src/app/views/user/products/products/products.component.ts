import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  product : any  [] = [ ]
  categories : any  [] = [ ]
  loading:boolean = false 
  searchKey:string="";
  constructor( private api : ApiService, public cartService : CartService) { }

  ngOnInit(): void {
    this.get()
    this.getcategories()
   this.cartService.search.subscribe((val  : any)=>{
    this.searchKey = val
   })
  }
  get(){
    this.loading = true 
    this.api.getall().subscribe(res=>{
      console.log(res);
    
      this.product = res
      this.loading = false 
    })
      }
      getcategories(){
        this.loading = true 
        this.api.getcategories().subscribe(res=>{
          console.log(res);
          this.categories = res
          this.loading = false 
        
        })
          }
      filtercategory(event:any){
      
        let value = event.target.value
        console.log(value);
        if(value == "all"){
          this.get()
        }else{
         this.getproductscategory(value)
        }
       
      }
    
      getproductscategory(keyword:any){
        this.loading = true 
        this.api.getproductbyname(keyword).subscribe(res=>{
          this.product = res
          this.loading = false 
        })
      }

}
