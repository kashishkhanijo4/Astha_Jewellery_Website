import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
         <div className="contact-page">
      <div className="get-in-touch">
        <h2 className="majortitle">Get in Touch with us : Astha's Retail Private Limited</h2>

      </div>

      <div className="orderQueries">
        <h5><strong>Order Status:</strong></h5>
        <p>To know about your order status or any product related queries, feel free to send us a message on WhatsApp or drop an email. We will be glad to help you.</p>
        <p>We're here - Connect at your ease</p>
        <p>Phone: <Link className="contactustag" href="tel:+919591321696">+91 - 9591321696</Link></p>
        <p>Email us: <Link className="contactustag" href="mailto:hello@Astha.com">hello@Astha.com</Link></p>
        <p>WhatsApp: <Link className="contactustag" href="https://wa.me/919591321696">+91 - 9591321696</Link></p>
        
        <p>Support Timings: Mon - Sat - (10 AM - 7 PM)</p>
        <p>WhatsApp Support: Mon - Sat (10 AM - 7 PM)</p>

        <div className="cntUsAddr">
          <h5>Corporate Office:</h5>
          <p>Kushal's Retail Private Limited</p>
          <p>#54/2, 2nd Floor, Above State Bank of India,</p>
          <p>Police Station Road, Basavanagudi,</p>
          <p>Bangalore 560 004.</p>
        </div>

        <div className="cntUsPhn">
          <p>E-mail: <Link className="contactustag" href="mailto:info@Astha.com">info@Astha.com</Link></p>
        </div>

        <div className="clear"></div>

        <p style={{ color: '#3f3f36' }}>
          <Link style={{ color: '#b32e2e', textDecoration: 'none' }} href="/locatestores">Click here</Link> to locate stores
        </p>
      </div>
    </div>
    </div>
  )
}

export default Contact