import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="page-header">
        <div class="container">
          <h1>Router Sample</h1>
          <div class="navLinks">
            <a [routerLink]="['/home']">Home</a>
            <a [routerLink]="['/about']">About</a>
            <a [routerLink]="['/contact']">Contact Us</a>
            <a [routerLink]="['/protected']">Protected</a>
          </div>
        </div>
    </div>
    <div id="content">
      <div class="container">
      <login></login>
      <hr>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent { }
