import {NgModule, APP_INITIALIZER} from '@angular/core'
import {ExtComponent} from './ext.component'
import {WelcomeComponent} from './welcome.component'
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { ExtComponent2 } from './ext2.component';

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
  declarations: [ExtComponent, ExtComponent2, WelcomeComponent],
  bootstrap: [],
  entryComponents: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit1,
      multi: true,
      deps: [/* your dependencies */]
    }
  ],
  exports: [ExtComponent, ExtComponent2, WelcomeComponent]
})

export class AppCommonModule {}

// required for AOT compilation
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


export function onAppInit1(/* dependencies */): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      console.log(`onAppInit1:: Ext app loaded`);
      resolve();
    });
  };
}
