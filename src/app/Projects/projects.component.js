"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ProjectsComponent = (function () {
    // Component class
    function ProjectsComponent() {
    }
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    core_1.Component({
        template: "\n  \t<div class=\"projects\">\n  \t<div class=\"demo-layout-transparent_sub mdl-layout mdl-js-layout mdl-layout--fixed-header\">\n      <header class=\"mdl-layout__header mdl-layout__header--transparent\">\n        <div class=\"mdl-layout__header-row\">\n\n          <!-- Title -->\n          <span class=\"mdl-layout-title\"></span>\n\n          <!-- Add spacer, to align navigation to the right -->\n          <div class=\"mdl-layout-spacer\"></div>\n\n          <!-- Navigation with router directives-->\n          <nav class=\"mdl-navigation\">\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/projects/programming']\">Software</a>\n            <a class=\"mdl-navigation__link\" [routerLink]=\"['/projects/other']\">Other</a>\n          </nav>\n        </div>\n      </header>\n\n      <main class=\"mdl-layout__content\">\n        <h1 class=\"header-text\">My Porfolio.</h1>\n      </main>\n    </div>\n    </div>\n\n    <div class=\"container\">\n    <h2>Projects</h2>\n    <p>types of projects</p>\n    </div>"
    })
], ProjectsComponent);
exports.ProjectsComponent = ProjectsComponent;
//# sourceMappingURL=projects.component.js.map