import {Component, ViewEncapsulation} from '@angular/core'
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ext-comp2',
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
      Show {{'common.greetings' | translate}}
    </div>
  `
})
export class ExtComponent2 {
    constructor(
    translate: TranslateService
  ) {
    translate.get('common.greetings').subscribe((res: string) => {
      console.log(res);
  });
  }
}
