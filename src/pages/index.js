import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
<div className="container">
  <div className="row">
    <div className="col-md-12"> 
      <h3 className="display-3 brand-title wow slideInRight" data-wow-duration="1s">
        Web Expressive
      </h3>
      <p className="lead brand-desc wow slideInLeft" data-wow-duration="2s" data-wow-delay="1s">
        The Expressive Web Blog
      </p>
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <h3 className="wow fadeInDown" data-wow-duration="2s" data-wow-delay="3s">
        Featured Topics
      </h3>
    </div>
  </div>
  <div className="row wow zoomIn" data-wow-duration="1s" data-wow-delay="4s">
    <div className="col-md-3">
      <div className="card">
        <img className="rounded topic-logo" src={require('./images/index/html.png')} />
        <div className="card-body">
          <h4 className="card-title">HTML</h4>
          <div className="card-text">
            Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.
          </div>
          <a  className="btn btn-sm btn-info">Browse</a>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card">
        <img className="rounded topic-logo" src={require('./images/index/css.png')} />
        <div className="card-body">
          <h4 className="card-title">CSS</h4>
          <div className="card-text">
            Cascading Style Sheets (CSS) is a simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents.
          </div>
          <a  className="btn btn-sm btn-info">Browse</a>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card">
        <img className="rounded topic-logo" src={require('./images/index/js.png')} />
        <div className="card-body">
          <h4 className="card-title">Javascript</h4>
          <div className="card-text">
            JavaScript is a dynamic programming language that can provide dynamic interactivity on HTML documents.
          </div>
          <a  className="btn btn-sm btn-info">Browse</a>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card">
        <img className="rounded topic-logo" src={require('./images/index/bootstrap.png')} />
        <div className="card-body">
          <h4 className="card-title">Bootstrap</h4>
          <div className="card-text">
            Bootstrap is an open source toolkit for developing web pages with HTML, CSS, and Javascript.
          </div>
          <a  className="btn btn-sm btn-info">Browse</a>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default IndexPage
