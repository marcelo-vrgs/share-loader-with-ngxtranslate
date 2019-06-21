import {NgModule, APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SelectComponent} from './select.component';
import {APP_STATES} from './app.states';
import {App1Component} from './app1.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    BrowserModule,  ReactiveFormsModule, RouterModule.forRoot(APP_STATES)],
  declarations: [AppComponent, SelectComponent, App1Component],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit1,
      multi: true,
      deps: [/* your dependencies */]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// required for AOT compilation
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

export function onAppInit1(/* dependencies */): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      console.log(`onAppInit1:: Shell APP loaded`);
      resolve();
    });
  };
}
