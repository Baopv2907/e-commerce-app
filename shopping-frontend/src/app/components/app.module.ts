import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from '.product-detail/product-detail.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [    
    HomeComponent, 
    HeaderComponent,
    FooterComponent, 
    ProductDetailComponent, 
    OrderComponent, 
    LoginComponent, 
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    //HomeComponent,
    //ProductDetailComponent,
    // OrderComponent,
    //OrderConfirmComponent,
    // LoginComponent,
    RegisterComponent
  ]
})
export class AppModule { }