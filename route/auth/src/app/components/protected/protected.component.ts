import { Component } from '@angular/core';

@Component({
  selector: 'protected',
  template: `
    <h1>
      Protected content
    </h1>
  `,
  styles: []
})
export class ProtectedComponent {

  constructor() { }

}