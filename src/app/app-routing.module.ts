import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path:"",
  loadChildren: 'app/customers/customers.module#CustomersModule'
},
{
  path: 'orders',
  loadChildren: 'app/orders/orders.module#OrdersModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
