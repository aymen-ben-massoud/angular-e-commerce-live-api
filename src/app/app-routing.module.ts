import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './layouts/user/user.component';
import { HomeComponent } from './views/user/home/home/home.component';
import { ProductsComponent } from './views/user/products/products/products.component';

const routes: Routes = [

// routing user 
{path: "" , component:UserComponent,children:[
  {path:'',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)  },
  {path:'products',loadChildren:()=>import('./views/user/products/products.module').then(m=>m.ProductsModule)  },
  {path:'contact',loadChildren:()=>import('./views/user/contact/contact.module').then(m=>m.ContactModule)  },
  {path:'cart',loadChildren:()=>import('./views/user/cart/cart.module').then(m=>m.CartModule)  },
  {path:'details/:id',loadChildren:()=>import('./views/user/details/details.module').then(m=>m.DetailsModule)  },
]},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
