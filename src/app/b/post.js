"use strict";
var Post = (function () {
    function Post(purpose, title, slug, body, posted, category) {
        this.purpose = purpose;
        this.title = title;
        this.slug = slug;
        this.body = body;
        this.posted = posted;
        this.category = category;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=post.js.map