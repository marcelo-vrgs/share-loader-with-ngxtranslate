import {APP_INITIALIZER, NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {AppCommonModule, HttpLoaderFactory, onAppInit1} from './app.common.module'
import {appStates} from './app.states'
import {CommonModule} from "@angular/common";
import {ExtComponent} from "./ext.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppCommonModule, CommonModule, RouterModule.forRoot(appStates)],
  declarations: [],
  bootstrap: [ExtComponent],
  entryComponents: [],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit1,
      multi: true,
      deps: [/* your dependencies */]
    }],
  exports: [RouterModule]
})

export class AppModule {
}
