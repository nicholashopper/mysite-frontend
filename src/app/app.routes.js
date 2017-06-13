"use strict";
var router_1 = require("@angular/router");
var blog_list_component_1 = require("./Blog/blog-list.component");
var projects_component_1 = require("./Projects/projects.component");
var about_component_1 = require("./About/about.component");
// Route Configuration
exports.routes = [
    { path: 'blog', component: blog_list_component_1.BlogListComponent },
    { path: 'projects', component: projects_component_1.ProjectsComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map