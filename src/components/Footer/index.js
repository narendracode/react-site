import React from 'react'
import Link from 'gatsby-link'
class Footer extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">webexpressive.com@2017</p>
        </div>
      </footer>
    )
  }
}

export default Footer