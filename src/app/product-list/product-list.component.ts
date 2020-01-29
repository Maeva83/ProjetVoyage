import { Component } from '@angular/core';
import { products } from '../products';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Votre voyage a été partagé !');
  }

  onNotify() {
    window.alert('Vous serez informé quand votre destination favorite sera à prix réduit');
  }
}
