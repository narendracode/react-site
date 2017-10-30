import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
<div className="container">
  <div className="row">
    <div className="col-md-12"> 
      <h1 className="display-3 wow bounceInUp" data-wow-duration="1s">
        Web Expressive
      </h1>
      <p className="lead wow slideInLeft" data-wow-duration="2s" data-wow-delay="1s">
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
  <div className="row">
    <div className="col-md-3 wow zoomIn" data-wow-duration="1s" data-wow-delay="4s">
      <div className="card">
        <img className="rounded topic-logo" src={require('./images/index/html.png')} />
        <div className="card-body">
          <h4 className="card-title">HTML</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a  className="btn btn-info">Browse</a>
        </div>
      </div>
    </div>

    <div className="col-md-3 wow zoomIn" data-wow-duration="1s" data-wow-delay="5s">
      <div className="card">
        <img className="rounded topic-logo" src={require('./images/index/css.png')} />
        <div className="card-body">
          <h4 className="card-title">CSS</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a  className="btn btn-info">Browse</a>
        </div>
      </div>
    </div>
    <div className="col-md-3 wow zoomIn" data-wow-duration="1s" data-wow-delay="6s">
      <div className="card">
        <img className="rounded topic-logo" src={require('./images/index/js.png')} />
        <div className="card-body">
          <h4 className="card-title">Javascript</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a  className="btn btn-info">Browse</a>
        </div>
      </div>
    </div>
    <div className="col-md-3 wow zoomIn" data-wow-duration="1s" data-wow-delay="7s">
      <div className="card">
        <img className="rounded topic-logo" src={require('./images/index/bootstrap.png')} />
        <div className="card-body">
          <h4 className="card-title">Bootstrap</h4>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a  className="btn btn-info">Browse</a>
        </div>
      </div>
    </div>
  </div>
</div>
)

export default IndexPage
