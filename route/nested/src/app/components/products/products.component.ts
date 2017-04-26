import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { ByIdComponent } from "./by-id/by-id.component";
import { InterestComponent } from "./interest/interest.component";
import { SportifyComponent } from "./sportify/sportify.component";


@Component({
  selector: 'products',
  template: `
    <div class="navLinks">
      <a [routerLink]="['./main']">Main</a> |
      <a [routerLink]="['./interest']">Interest</a> |
      <a [routerLink]="['./sportify']">Sportify</a> |
      Enter id: <input #id size="6">
      <button (click)="goToProduct(id.value)">Go</button>
    </div>
    <div class="products-area">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class ProductsComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  goToProduct(id: string): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }


}

export const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'interest', component: InterestComponent },
  { path: 'sportify', component: SportifyComponent },
  { path: ':id', component: ByIdComponent }
]
