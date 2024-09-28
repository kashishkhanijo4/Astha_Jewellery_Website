import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom

const Mechanisms = () => {
  // Grievance options as an array to map
  const grievanceContacts = [
    {
      title: 'Customer Service Helpline:',
      value: '+91 9591321696',
      href: 'https://wa.me/919591321696',
    },
    {
      title: 'Email:',
      value: 'hello@Asthas.com',
      href: 'mailto:hello@Asthas.com',
    },
    {
      title: 'Mailing address:',
      value: "Astha's Retail Private Limited, #54/2, 2nd Floor, Above State Bank of India, Police Station Road, Basavanagudi, Bangalore 560 004",
      href: '/contact', // Assuming internal routing for contact page
    },
  ];

  const otherStakeholdersContacts = [
    {
      title: 'Email:',
      value: 'hello@Asthas.com',
      href: 'mailto:hello@Asthas.com',
    },
    {
      title: 'Mailing address:',
      value: "Astha's Retail Private Limited, #54/2, 2nd Floor, Above State Bank of India, Police Station Road, Basavanagudi, Bangalore 560 004",
      href: '/contact', // Assuming internal routing for contact page
    },
  ];

  return (
    <div className="mechanism">
      <h1 className="majortitle">Grievance Redressal Mechanism</h1>

      <div className="rte">
        <div style={{ maxWidth: '1250px', margin: '0 auto', padding: '0 20px' }}>
          <p>
            Astha’s understands the importance of its stakeholders and is actively on the lookout to address any concerns/complaints
            raised by the stakeholders in a timely and effective manner. It has developed a comprehensive Grievance Redressal Mechanism
            (GRM) to allow external and internal stakeholders to submit their concerns, grievances, and feedback without retribution
            and with the assurance of a timely response.
          </p>

          <p>Customer Grievances or Complaints</p>
          <p>Our dedicated Grievance Redressal Team manages all queries and escalations across all touch points.</p>
          <ul style={{type:"none"}}>
            {grievanceContacts.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>&nbsp;
                {item.href.startsWith('http') || item.href.startsWith('mailto') ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.value}
                  </a>
                ) : (
                  <Link to={item.href}>{item.value}</Link> 
                )}
              </li>
            ))}
          </ul>

          <p>Grievances or Complaints by other stakeholders</p>
          <ul>
            {otherStakeholdersContacts.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong>&nbsp;
                {item.href.startsWith('http') || item.href.startsWith('mailto') ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.value}
                  </a>
                ) : (
                  <Link to={item.href}>{item.value}</Link>
                )}
              </li>
            ))}
          </ul>

          <p>Resolution Process</p>
          <p>
            For any grievance or complaint, a confirmation of receipt will be sent to the sender within 48 hours of receiving the
            written question or concern, and they will be informed that they will receive a response in writing within 15 business
            days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mechanisms;
