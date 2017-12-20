import React from 'react'
import Link from 'gatsby-link'
class Social extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <div className="social-profile">
        <span> 
          <a href="https://sg.linkedin.com/in/narendrakumarsoni" target="_blank" className="social-link">
            <span className="fa-stack fa-lg">
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-linkedin fa-stack-1x"></i>
            </span>
          </a>
        </span>

        <span>
          <a href="https://github.com/narendrasoni1989" target="_blank" className="social-link">
            <span className="fa-stack fa-lg">
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-github fa-stack-1x"></i>
            </span>
          </a>
        </span>

        <span>
          <a href="http://stackoverflow.com/users/2161130/narendrasoni" target="_blank" className="social-link">
            <span className="fa-stack fa-lg">
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-stack-overflow fa-stack-1x"></i>
            </span>
          </a>
        </span>

        <span>
          <a href="https://twitter.com/Narendra_SoniK" target="_blank" className="social-link">
            <span className="fa-stack fa-lg">
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-twitter fa-stack-1x"></i>
            </span>
          </a>
        </span>

      </div>
    )
  }
}

export default Social