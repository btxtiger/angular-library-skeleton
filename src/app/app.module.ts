import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLibComponent } from '../../projects/ngx-lib/src/lib/ngx-lib.component';
// import { NgxLibComponent } from 'ngx-lib';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
   declarations: [AppComponent],
   imports: [BrowserModule, AppRoutingModule, NgxLibComponent, BrowserAnimationsModule, MatButtonModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
