import {NgModule} from '@angular/core'
import {ExtComponent} from './ext.component'
import {WelcomeComponent} from './welcome.component'
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [ExtComponent, WelcomeComponent],
  bootstrap: [],
  entryComponents: [],
  providers: [],
  exports: [ExtComponent, WelcomeComponent]
})

export class AppCommonModule {}

// required for AOT compilation
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

