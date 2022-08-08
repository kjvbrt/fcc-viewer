import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';

import { RouterModule } from '@angular/router';
import { FccComponent } from './fcc/fcc.component';

@NgModule({
  declarations: [
    AppComponent,
    FccComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PhoenixUIModule,
    RouterModule.forRoot([{ path: '', component: FccComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
