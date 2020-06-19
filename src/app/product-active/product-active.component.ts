import { Component, OnInit } from '@angular/core';
import {products} from '../products'
import { ActivatedRoute } from '@angular/router';
import { CartServiceService} from '../cart-service.service'

@Component({
  selector: 'app-product-active',
  templateUrl: './product-active.component.html',
  styleUrls: ['./product-active.component.css']
})
export class ProductActiveComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService:CartServiceService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(parmas => {
      this.product = products[parmas.get('productId')]
    })
  }
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('添加购物车')
  }

}
