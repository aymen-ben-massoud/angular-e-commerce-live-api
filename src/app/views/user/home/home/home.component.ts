import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
declare var open: any;
declare var close: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product : any  [] = [ ]
  categories : any  [] = [ ]
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    new open()
    new close()
    this.get()
    this.getcategories()
  }
  get(){
   
    this.api.getall().subscribe(res=>{
   
    
      this.product = res
    
    })
      }
      getcategories(){
       
        this.api.getcategories().subscribe(res=>{
         
          this.categories = res
       
        
        })
          }
      filtercategory(event:any){
      
        let value = event.target.value
       
        if(value == "all"){
          this.get()
        }else{
         this.getproductscategory(value)
        }
       
      }
    
      getproductscategory(keyword:any){
        
        this.api.getproductbyname(keyword).subscribe(res=>{
          this.product = res
       
        })
      }
    
}
