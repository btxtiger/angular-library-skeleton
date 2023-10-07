import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the library
import { NgxLibComponent } from '../../projects/ngx-lib/src/lib/ngx-lib.component';
// import { NgxLibComponent } from 'ngx-lib';

@NgModule({
   declarations: [AppComponent],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgxLibComponent,
      BrowserAnimationsModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
