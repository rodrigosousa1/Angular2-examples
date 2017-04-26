import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductsComponent, routes as childRoutes } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/products/main/main.component';
import { ByIdComponent } from './components/products/by-id/by-id.component';
import { InterestComponent } from './components/products/interest/interest.component';
import { SportifyComponent } from './components/products/sportify/sportify.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent, children: childRoutes }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    MainComponent,
    ByIdComponent,
    InterestComponent,
    SportifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
