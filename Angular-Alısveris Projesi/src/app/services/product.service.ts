import { AlertifyService } from './alertify.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../product/product';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(
    private http: HttpClient,
    private alertifyService: AlertifyService
  ) {}
  
  path = 'http://localhost:3000/products';

  getProducts(categoryId: any): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath = newPath + '?categoryId=' + categoryId;
    }

    return this.http.get<Product[]>(newPath).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  
  ekleProduct(product:Product): Observable<Product> {
    const httpOpstions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path,product,httpOpstions).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


 handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage =
        'Bilinmeyen bir sebepten dolayı hata oluştu.' + err.error.message;
    } else {
      errorMessage = 'Sistemden dolayı bir hata oluştu.';
    }
    return throwError(errorMessage);
  }
}









  







