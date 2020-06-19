import { CartServiceService } from './../cart-service.service';
import { from, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  ShippingCosts: Observable<any>;
  constructor(
    private CartService: CartServiceService
  ) { }

  ngOnInit() {
    this.ShippingCosts = this.CartService.getShippingPrices()
    // console.log(this.CartService.getShippingPrices())
  }

}
