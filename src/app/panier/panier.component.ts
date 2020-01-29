import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  destinations;
  formulaire;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.destinations = this.cartService.getItems();

    this.formulaire = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
  onSubmit(données) {
    // Process checkout data here
    console.warn('Votre destination a été enregistrée', données);

    this.destinations = this.cartService.clearCart();
    this.formulaire.reset();
  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
      this.destinations = this.cartService.getItems();

    }
  }
