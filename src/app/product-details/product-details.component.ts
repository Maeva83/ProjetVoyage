import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../service/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: { name: string; price: number; description: string; };

  constructor(private route: ActivatedRoute,
              private cartService: CartService) { }

    addToCart(product) {
      window.alert('Votre voyage a été ajouté à votre panier!');
      this.cartService.addToCart(product); }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
