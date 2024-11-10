import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductsModule } from './Modules/products/products.module';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', loadChildren:()=>import('../app/Modules/products/products.module').then(m=>ProductsModule)}
];
