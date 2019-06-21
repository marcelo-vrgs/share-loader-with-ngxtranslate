import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'This is the sample message.';
  constructor(
    translate: TranslateService
  ) {
    translate.setDefaultLang('pt');
    translate.use(translate.getBrowserLang());

    translate.get('common.greetings').subscribe((res: string) => {
      this.message = res;
      console.log(this.message);
  });
  }
}
