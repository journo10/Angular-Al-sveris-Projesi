import { AlertifyService } from './../../services/alertify.service';
import { ProductService } from './../../services/product.service';
import { Category } from './../../category/category';
import { CategoriesService } from './../../services/categories.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoriesService, ProductService],
})
export class ProductAddForms1Component implements OnInit {
  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductService,
    private alertifyService: AlertifyService
  ) {}

  model: Product = new Product();
  categories: Category[] = [];

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  ekle(form: NgForm) {
    this.productService.ekleProduct(this.model).subscribe((data) => {
      this.alertifyService.success(
        data.name + ' ' + ' Başarılı bir şekilde eklendi'
      );
    });
  }
}
