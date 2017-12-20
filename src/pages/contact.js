import React from "react"
import Social from '../components/Social'
const ContactPage = () => (
<div className="container page-content">
  <div className="row">
    <div className="col-md-12">
	    <h1>Contact Me</h1>
	    <address>
	      <strong>Full Name</strong>
	     <br/>
	      Narendra Kumar Soni
	    </address>

	    <address>
	      <strong>Email</strong>
	     <br/>
	      narendrasoni2@gmail.com
	    </address>

	    <address>
	      <strong>Phone</strong>
	     <br/>
	      +65-83994009
	    </address>
	    <address>
	      <strong>Mailing Address</strong>
	     <br/>
	      #08-43, 20 Woodland Crescent
	      <br/>
	      Singapore, 738082
	    </address>
	</div>
	<div className="col-md-12">
  		<Social />
  	</div>
  </div>
</div>
)

export default ContactPage