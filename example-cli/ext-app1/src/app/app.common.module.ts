import {NgModule} from '@angular/core'
import {ExtComponent} from './ext.component'
import {WelcomeComponent} from './welcome.component'
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { ExtComponent2 } from './ext2.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    TranslateModule, CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [ExtComponent, ExtComponent2, WelcomeComponent],
  exports: [ExtComponent, ExtComponent2, WelcomeComponent, TranslateModule]
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
