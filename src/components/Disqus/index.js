import React, { Component } from "react";
import ReactDisqusComments from "react-disqus-comments";
import config from "../../../SiteConfig";

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }
  notifyAboutComment() {
    const toasts = this.state.toasts.slice();
    toasts.push({ text: "New comment available!" });
    this.setState({ toasts });
  }



  render() {
    console.log('hello world from Disqus');
    //console.log(this.props);
    const { postNode } = this.props;
   
    if (!config.disqusShortname) {
      return null;
    }

    const url = config.siteUrl + postNode.path;
    return (
      <ReactDisqusComments
        shortname={config.disqusShortname}
        identifier={postNode.path}
        title={postNode.title}
        url={url}
        category_id="tech"
        onNewComment={this.notifyAboutComment}
      />
    );
  }
}

export default Disqus;