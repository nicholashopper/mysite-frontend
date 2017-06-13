"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Imports
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// Declarations
var app_component_1 = require("./app.component");
var blog_list_component_1 = require("./Blog/blog-list.component");
var about_component_1 = require("./About/about.component");
var projects_component_1 = require("./Projects/projects.component");
// import { DogDetailsComponent }  from './dogs/dog-details.component';
var blog_service_1 = require("./Blog/blog.service");
// import { Pet }          from './pet';
var app_routes_1 = require("./app.routes");
// Decorator
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routes_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            blog_list_component_1.BlogListComponent,
            about_component_1.AboutComponent,
            projects_component_1.ProjectsComponent
        ],
        providers: [
            blog_service_1.BlogService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map