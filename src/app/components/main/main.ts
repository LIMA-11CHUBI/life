import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, Observable, combineLatest, map, shareReplay } from 'rxjs';
import { ProductService } from '../../services/toolsservices';

@Component({
  selector: 'app-main',
  imports: [AsyncPipe],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnInit {

  public products$!: Observable<any[]>;
  public categories$!: Observable<any[]>;
  public filteredProducts$!: Observable<any[]>;

  private selectedCategoryId$ = new BehaviorSubject<number | null>(null);

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts().pipe(shareReplay(1));
    this.categories$ = this.productService.getCategories();

    this.filteredProducts$ = combineLatest([
      this.products$,
      this.selectedCategoryId$,
    ]).pipe(
      map(([products, categoryId]) =>
        categoryId === null
          ? products
          : products.filter(
              (p) => p.categoryId === categoryId || p.category?.id === categoryId
            )
      )
    );
  }

  filterByCategory(categoryId: number | null): void {
    this.selectedCategoryId$.next(categoryId);
  }
}
