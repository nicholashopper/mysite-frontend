import { Component } from '@angular/core';
import { HomeComponent } from './home.component'
// Import router directives
// Deprecated
// import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <div class="demo-layout-transparent mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">

          <!-- Title -->
          <span class="mdl-layout-title">Nicholas Hopper</span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>

          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [routerLink]="['/']">Home</a>
            <a class="mdl-navigation__link" [routerLink]="['/blog']">Blog</a>
            <a class="mdl-navigation__link" [routerLink]="['/projects']">Projects</a>
            <a class="mdl-navigation__link" [routerLink]="['/about']">About</a>
            <a class="mdl-navigation__link" [routerLink]="['/contact']">Contact</a>
          </nav>
        </div>

      </header>
    </div>

    <!-- Router Outlet -->
    <router-outlet></router-outlet>
  `,
  // Not necessary as we have provided directives using
  // `RouterModule` to root module
  // Tell component to use router directives
  // directives: [ROUTER_DIRECTIVES]
})

// App Component class
export class AppComponent {}