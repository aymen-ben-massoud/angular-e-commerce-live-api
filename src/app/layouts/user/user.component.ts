import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

declare var open: any;
declare var close: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public searchTerm : string ='';
  constructor( private api : ApiService  , private router: Router , public cartServic : CartService) { 
    
  }
  product : any = []; 
  ngOnInit(): void {
    new open()
    new close()

    this.searchproduct(search  )
    
  }
 
  searchproduct(search :any ){
this.api.searching(search).subscribe(res =>this.product = res  )
  }

 
  searchs(event:any){
this.searchTerm = (event.target as HTMLInputElement).value;
this.cartServic.search.next(this.searchTerm);
console.log(this.searchTerm)
  }
}


function search(search: any, any: any) {
  throw new Error('Function not implemented.');
}

