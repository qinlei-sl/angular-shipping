import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductActiveComponent } from './product-active/product-active.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  {
    path: '',
    component:ProductListComponent,
  },
  {
    path: 'products/:productId',
    component: ProductActiveComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'shipping',
    component: ShippingComponent
  }
];

export const MyRouteRoutes = RouterModule.forRoot(routes);
