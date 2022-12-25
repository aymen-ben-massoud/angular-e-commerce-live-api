import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from 'src/app/shared/filter.pipe';



@NgModule({
  declarations: [
   
 ProductsComponent,
 FilterPipe,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,

    
  ]
})
export class ProductsModule { }
