import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  name = "";
  price;

  product: Product;

  constructor(private productService: ProductService, private location: Location) { }

  ngOnInit(): void {
  }

  createProduct() {

    this.product = {
      name: this.name,
      unit_price: this.price
    };

    this.productService.createProduct(this.product).subscribe(res => this.location.back());
  }

}
