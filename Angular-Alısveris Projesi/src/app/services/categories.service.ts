import { AlertifyService } from './alertify.service';
import { Category } from './../category/category';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient,private alertifyService:AlertifyService) { }
  
  path=("http://localhost:3000/categories")

  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.path);
  }

}
