import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: '/html/app.html',
})

// App Component class
export class AppComponent {
	ngAfterViewInit(){
        componentHandler.upgradeAllRegistered();
    }
}