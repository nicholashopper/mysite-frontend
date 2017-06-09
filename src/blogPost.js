import {DeliveryService, Store} from 'react-at-rest'
import React from 'react'

class BlogPosts extends DeliveryService {
 
  constructor(props) {
    super(props);
    // create a new Store which connected to an API at /posts
    this.postStore = new Store('blog/api/getAllBogs');
  }
 
  // override bindResources to load all the resources needed for this component
  bindResources(props) {
    // retrieve all the posts from the Post Store
    this.retrieveAll(this.postStore);
  }
 
  render() {
    // show a loading message while loading data
    if !this.state.loaded
      return (<span>Loading...</span>)
 
    // iterate over all the blog posts loaded from our API
    let posts = this.state.posts.map((post) => {
      return (
        <div className="panel panel-default" key={post.slug}>
          <div className="panel-heading">
            <h3 className="panel-title">{post.title}</h3>
          </div>
          <div className="panel-body">
            {post.body}
          </div>
        </div>
      )
 
    // render the posts
    return (
      <div>
        {posts}
      </div>
    )
  }   
}
