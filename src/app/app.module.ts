import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLibModule } from '../../projects/ngx-lib/src/lib/ngx-lib.module';
// import { NgxLibModule } from 'ngx-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
   declarations: [AppComponent],
   imports: [BrowserModule, AppRoutingModule, NgxLibModule, BrowserAnimationsModule, MatButtonModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
