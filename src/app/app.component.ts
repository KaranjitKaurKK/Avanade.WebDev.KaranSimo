import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class='navbar navbar-coral navbar-coral bg-coral'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/home'>HOME</a></li>
      <li><a class='nav-link' routerLink='/about'>ABOUT</a></li>
      <li><a class='nav-link' routerLink='/contact-list'>CONTACTS</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'AVANADE';
}
