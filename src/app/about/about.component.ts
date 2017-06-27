import { Component } from '@angular/core';

@Component({
  template: `
  	<div class="about">
  	<div class="demo-layout-transparent_sub mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">

          <!-- Title -->
          <span class="mdl-layout-title"></span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>

          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
            <a class="mdl-navigation__link" [routerLink]="['/post/bio']">Myself</a>
            <a class="mdl-navigation__link" [routerLink]="['/post/this-site']">This Site</a>
          </nav>
        </div>
      </header>

      <main class="mdl-layout__content">
        <h1 class="header-text">What to know.</h1>
      </main>
    </div>
    </div>

    <div class="container">
	    <h2>About</h2>
	    <p> Hi, I'm <a [routerLink]="['/post/bio']">Nicholas Hopper</a>.<br><br>
      I have created <a [routerLink]="['/post/this-site']">this domain</a> to showcases my projects and current endeavors.
      </p>
	</div>`
})

// Component class
export class AboutComponent {}