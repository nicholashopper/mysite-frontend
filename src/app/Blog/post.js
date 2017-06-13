"use strict";
var Post = (function () {
    function Post(title, slug, body, posted, category) {
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