import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { CounterState } from './states/counter.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgxsModule.forRoot([CounterState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
