import { Component } from '@angular/core';

@Component({
  template: `
  	<div class="projects">
  	<div class="demo-layout-transparent_sub mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">

          <!-- Title -->
          <span class="mdl-layout-title"></span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>

          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [routerLink]="['/projects/programming']">Software</a>
            <a class="mdl-navigation__link" [routerLink]="['/projects/other']">Other</a>
          </nav>
        </div>
      </header>

      <main class="mdl-layout__content">
        <h1 class="header-text">My Porfolio.</h1>
      </main>
    </div>
    </div>

    <div class="container">
    <h2>Projects</h2>
    <p>types of projects</p>
    </div>`
})

// Component class
export class ProjectsComponent {}