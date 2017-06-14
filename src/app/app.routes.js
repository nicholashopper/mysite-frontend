"use strict";
var router_1 = require("@angular/router");
var blog_list_component_1 = require("./Blog/blog-list.component");
var projects_component_1 = require("./Projects/projects.component");
var about_component_1 = require("./About/about.component");
var contact_component_1 = require("./Contact/contact.component");
var home_component_1 = require("./home.component");
var _404_component_1 = require("./404.component");
// Route Configuration
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'blog', component: blog_list_component_1.BlogListComponent },
    { path: 'projects', component: projects_component_1.ProjectsComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '**', component: _404_component_1.ErrorComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map