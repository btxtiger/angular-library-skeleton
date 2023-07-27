import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxLibModule} from "../../projects/ngx-lib/src/lib/ngx-lib.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
