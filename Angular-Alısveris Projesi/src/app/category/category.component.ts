import { AlertifyService } from './../services/alertify.service';
import { CategoriesService } from './../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoriesService],
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoriesService: CategoriesService,
    private alertifyService: AlertifyService
  ) {}
  title = 'Kategori Listesi';
  categories: Category[] = [];

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
