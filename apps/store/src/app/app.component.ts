import { Component } from '@angular/core';
import { exampleProducts } from '@myorg/products';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  products = exampleProducts;
  title = '';
}
