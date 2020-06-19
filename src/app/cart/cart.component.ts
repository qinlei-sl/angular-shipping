import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService: CartServiceService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address:'',
    })
  }

  ngOnInit() {
    this.items = this.cartService.getItems()
  }

  onSubmit(customerData) {
    this.items = this.cartService.cleaCart();
    this.checkoutForm.reset();
    console.warn('Your order has been submitted', customerData);
  }

}
