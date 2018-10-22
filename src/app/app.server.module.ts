import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';

import { AppModule } from './app.module';
import { ServerUtilsModule } from './server-utils/server-utils.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerUtilsModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {
}
