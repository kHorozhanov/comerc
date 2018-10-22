import { DOCUMENT } from '@angular/common';
import { NgModule } from '@angular/core';
import { BEFORE_APP_SERIALIZED } from '@angular/platform-server';
import { Store } from '@ngxs/store';
import { transferStoreState } from './services/transfer-store-state';

@NgModule({
  providers: [
    {
      provide: BEFORE_APP_SERIALIZED,
      useFactory: transferStoreState,
      multi: true,
      deps: [Store, DOCUMENT]
    }
  ]
})
export class ServerUtilsModule {

}
