import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../../services/toolsservices';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnInit {

  public products = signal<any[]>([]);
  public categories = signal<any[]>([]);
  public filteredProducts = signal<any[]>([]);

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products.set(data);
      this.filteredProducts.set(data);
    });
    this.productService.getCategories().subscribe((data) => {
      this.categories.set(data);
    });
  }

  filterByCategory(categoryId: number | null): void {
    if (categoryId === null) {
      this.filteredProducts.set(this.products());
      return;
    }
    this.filteredProducts.set(
      this.products().filter(
        (p) => p.categoryId === categoryId || p.category?.id === categoryId
      )
    );
  }
}
