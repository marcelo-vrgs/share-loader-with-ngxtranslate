import { Component } from '@angular/core';

@Component({
  selector: 'my-select',
  styles: [`

  `],
  template: `
    <div>
      <a routerLink="app1" routerLinkActive="active">internal component</a><br />
      <a routerLink="ext" routerLinkActive="active">external app (with translation initializer)</a><br />
      <a routerLink="ext/ext2" routerLinkActive="active">external app 2 (without translation initializer)</a><br />
      <a routerLink="ext/welcome" routerLinkActive="active">welcome app</a>
      <router-outlet></router-outlet>
    </div>
  `
})
export class SelectComponent {
}
