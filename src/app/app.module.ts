// import { MyRouteRoutes } from './my-route.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' //使用 Angular 的 HTTP 客户端
// import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductActiveComponent } from './product-active/product-active.component';
import { CartComponent } from './cart/cart.component';
import { MyRouteRoutes} from './my-route.routing'
// import { from } from 'rxjs';
import { ShippingComponent } from './shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      ProductListComponent,
      ProductActiveComponent,
      CartComponent,
      ShippingComponent
   ],
   imports: [
      BrowserModule,
      MyRouteRoutes,
      HttpClientModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
