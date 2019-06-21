import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ext-welcome',
  styles: [`
    :host{
      display: block;
      background: blue;
      color: white;
    }

  `],
  template: `
    <div>
      <h1><span>{{ message }}</span></h1>
      <h1><span>{{ "common.welcome" | translate }}</span></h1>
    </div>
  `
})
export class WelcomeComponent {
  message = 'this is a nested routed external component';
  constructor(
    translate: TranslateService
  ) {

  }
}
