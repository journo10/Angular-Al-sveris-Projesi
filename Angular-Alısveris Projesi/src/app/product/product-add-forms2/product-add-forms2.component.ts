import { AlertifyService } from './../../services/alertify.service';
import { ProductService } from './../../services/product.service';
import { CategoriesService } from './../../services/categories.service';
import { Category } from './../../category/category';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoriesService, ProductService],
})
export class ProductAddForms2Component implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private productService: ProductService,
    private alertifyService:AlertifyService,
  ) {}

  FormIsmi: FormGroup | any;
  model: Product = new Product();
  categories: Category[] = [];

  ngOnInit(): void {
    this.createFormIsmi();
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  createFormIsmi() {
    this.FormIsmi = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  ekle() {
    if (this.FormIsmi.valid)
      this.model = Object.assign({}, this.FormIsmi.value);

      this.productService.ekleProduct(this.model).subscribe((data) => {
      this.alertifyService.success(
        data.name + ' ' + ' Başarılı bir şekilde eklendi'
      );
    });
  }
}
