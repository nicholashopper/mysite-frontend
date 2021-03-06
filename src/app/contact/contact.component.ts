import { Component } from '@angular/core';

@Component({
  template: `
  	<div class="contact">
  	<div class="demo-layout-transparent_sub mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header mdl-layout__header--transparent">
        <div class="mdl-layout__header-row">

          <!-- Title -->
          <span class="mdl-layout-title"></span>

          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>

          <!-- Navigation with router directives-->
          <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="https://github.com/nicholashopper/">GitHub</a>
            <a class="mdl-navigation__link" href="https://www.linkedin.com/in/nichhopper/">LinkedIn</a>
          </nav>
        </div>
      </header>

      <main class="mdl-layout__content">
        <h1 class="header-text">How to reach me.</h1>
      </main>
    </div>
    </div>

    <div class="container">
	    <h2>Contact</h2>
	    <p>Currently, you can reach me at <b><i>nicholas.hopper.work@gmail.com</i></b></p>
	</div>`
})

// Component class
export class ContactComponent {}