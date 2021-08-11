import { AccountService } from './services/account.service';
import { AlertifyService } from './services/alertify.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { NavComponent } from './nav/nav.component';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { AnasayfaComponent } from './nav/component/anasayfa/anasayfa.component';
import { HakkimizdaComponent } from './nav/component/hakkimizda/hakkimizda.component';
import { IletisimComponent } from './nav/component/iletisim/iletisim.component';
import { LoginComponent } from './login/login.component';
import { loginGuard } from './login/login.guard';





@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    ProductFilterPipe,
    NavComponent,
    ProductAddForms1Component,
    ProductAddForms2Component,
    AnasayfaComponent,
    HakkimizdaComponent,
    IletisimComponent,
    LoginComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   
    
  ],
  providers: [AlertifyService,AccountService,loginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
