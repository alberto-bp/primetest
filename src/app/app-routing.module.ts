import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from "./components/product-list/product-list.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/create', component: ProductsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
