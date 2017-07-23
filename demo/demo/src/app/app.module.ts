// Imports
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


// Declarations
import { AppComponent }         from './app.component';
import { AppRoutingModule } from './app.routes';


// Decorator
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
  ],
  bootstrap: [ 
    AppComponent
 ]
})
export class AppModule {
    // Module class
}