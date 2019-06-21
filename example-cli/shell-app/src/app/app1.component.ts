import { Component } from '@angular/core';

@Component({
  selector: 'my-app1',
  styles: [`

  `],
  template: `
    <h1>{{"common.internalComponentMainMessage" | translate}}</h1>
  `
})
export class App1Component {
}
