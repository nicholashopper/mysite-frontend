"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var blog_service_1 = require("./blog.service");
var BlogListComponent = (function () {
    function BlogListComponent(blogService) {
        this.blogService = blogService;
        this.mode = 'Observable';
    }
    BlogListComponent.prototype.ngOnInit = function () { this.getPosts(); };
    BlogListComponent.prototype.getPosts = function () {
        var _this = this;
        this.blogService.getPosts()
            .subscribe(function (posts) { return _this.posts = posts; }, function (error) { return _this.errorMessage = error; });
    };
    return BlogListComponent;
}());
BlogListComponent = __decorate([
    core_1.Component({
        selector: 'blog-list',
        providers: [blog_service_1.BlogService],
        template: "\n    <h2>Blog Posts</h2>\n    <p>List of posts</p>\n    <ul class=\"demo-list-icon mdl-list\">\n      <li class=\"mdl-list__item\" *ngFor=\"let post of posts\">\n        <span>\n            <h4>{{post.title}}</h4>\n            <p> {{post.body}} </p>\n        </span>\n    </ul>\n    <p class=\"error\" *ngIf=\"errorMessage\">{{errorMessage}}</p>"
    }),
    __metadata("design:paramtypes", [blog_service_1.BlogService])
], BlogListComponent);
exports.BlogListComponent = BlogListComponent;
//# sourceMappingURL=blog-list.component.js.map