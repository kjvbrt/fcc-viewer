import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';
import { RouterModule } from '@angular/router';
import { FcchhDetectorComponent } from './fcchh-detector/fcchh-detector.component';

@NgModule({
  declarations: [
    AppComponent,
    FcchhDetectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PhoenixUIModule,
    RouterModule.forRoot([{ path: '', component: FcchhDetectorComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
