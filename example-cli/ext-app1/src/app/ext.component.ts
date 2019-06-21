import {Component, ViewEncapsulation} from '@angular/core'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ext-comp',
  encapsulation: ViewEncapsulation.Native,
  styles: [`
    :host {
      display: block;
      border: 5px solid red;
      min-height: 90vh;
      background: red;
    }

    .btn {
      background: purple;
      color: white;
      text-align: center;
      height: 30px;
    }
  `],
  template: `
    <div>
      <button class="btn" routerLink="welcome" routerLinkActive="active" >Show {{'common.greetings' | translate}}</button>
      <router-outlet></router-outlet>
    </div>
  `
})
export class ExtComponent {
    constructor(
    translate: TranslateService
  ) {
    translate.setDefaultLang('pt');
    translate.use(translate.getBrowserLang());

    translate.get('common.greetings').subscribe((res: string) => {
      console.log(res);
  });
  }
}
