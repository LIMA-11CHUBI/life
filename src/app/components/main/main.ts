import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/toolsservices';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnInit {

  public products$!: Observable<any>;
  public categories$!: Observable<any>;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    this.categories$ = this.productService.getCategories();
  }
}