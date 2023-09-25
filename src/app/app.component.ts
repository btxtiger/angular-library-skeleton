import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   constructor() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
         this.toggleDarkMode();
      }
   }

   /** Toggle Dark Mode */
   public toggleDarkMode(): void {
      document.body.classList.toggle('dark');
   }
}
