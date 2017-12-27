import React, { Component } from "react";
import ReactDisqusComments from "react-disqus-comments";
import config from "../../../SiteConfig";
import ReactDisqusThread from "react-disqus-thread";

class Disqus extends Component{

  handleNewComment(comment) {
    console.log(comment.text);
  }

  
  render() {
    const { postNode } = this.props;
   
    if (!config.disqusShortname) {
      return null;
    }

    const url = config.siteUrl + postNode.path;
    return (
      <ReactDisqusComments
        shortname="webexpressive"
        identifier="something-unique-12345"
        title="Example Thread"
        url="webexpressive.com/blog/superfast-CI-CD-using-docker-travisci-and-digitalocean/"
        category_id="123456"
        onNewComment={this.handleNewComment}/>
    );
  }

}


export default Disqus;