import React from 'react';

const Commitment = () => {
  const commitments = [
    "Complying with all the Environment, Health, Safety and Social (EHSS) laws at National, State and local level and abide by the good industry practices, based on global reference standards in its business activities;",
    "Encourage sustainable supply chain by building a network of responsible associated partners committed to environmental stewardship and social compliance across the business operations;",
    "Provide safe and healthy work environment to all employees and other associated stakeholders to prevent any injury and ill-health;",
    "Respect human right principles as well as local cultures, customs, values and safety while dealing with the employees, external consultants/vendors/service providers, local community with respect to business;",
    "Not engage child and forced labour, avoid discrimination among employees – in particular with regards to wages, hiring, access to training, promotion, maternity protection and dismissal – based on sex, race or ethnic origin, religion, disability, sexual orientation, political affiliation, nationality, gender identity or social background, and follow disciplinary practices and the system of freedom of association in the organization;",
    "Ensure payment of wages and overtime complying with industry or legal national minima and ensure that all benefits that employees are eligible for are clearly communicated to them.",
    "Ensure the right of workers and employers to form and join independent organizations i.e. freedom of association without interference from others and right to collective bargaining.",
    "Establish transparent, fair and prompt communication mechanisms and channels to ensure effective stakeholder engagement that enables appropriate decision-making;",
    "Implement a systematic communication/grievances reporting, response and monitoring mechanism for all the stakeholders;",
    "Put in place an organizational structure, defining the roles in the implementation of the E&amp;S Policy and Environment & Social Management System (ESMS).",
    "Maintain employee engagement and empower them through periodic training programs, encouraging them to accept individual responsibility for implementation of E&amp;S Policy, best practices and remain compliant with all applicable standards;",
    "Delineate respective roles and responsibilities across all business verticals in line with this Policy and ensure that all employees are aware of their roles and responsibilities to fulfil and sustain the policy;"
  ];

  return (
    <div className="track-container">
      <h1 className="majortitle-Commit">Environmental and Social (E&amp;S) Policy</h1>

      <div className="rte">
        <div style={{ maxWidth: '1250px', margin: '0 auto', padding: '0 10px' }}>
          <p>
            Astha’s has developed an E&amp;S policy (“Policy”) to integrate E&amp;S commitments into its business operations,
            management and decision-making process across all its facilities (office, warehouse and retail stores). The Policy
            defines E&amp;S objectives and guides the Company to achieve sound E&amp;S performance in compliance with applicable
            legal requirements and E&amp;S reference frameworks. It reflects the Company’s commitment to the employees’ welfare and
            professional growth, which can contribute to Astha’s positive growth.
          </p>

          <h3>Astha’s is committed to:</h3>
          <ol>
            {commitments.map((commitment, index) => (
              <li key={index}>{commitment}</li>
            ))}
          </ol>

          <h3>Policy Applicability and Implementation:</h3>
          <p>
            The E&amp;S Policy of Astha’s will govern the overall operations of the Company, including its decision-making in an
            environmentally and socially sustainable manner. The third-party material and service providers (including vendors and
            contractors) of the Company are encouraged to follow the E&amp;S policy and associated procedure, as applicable, with
            guidance and support from Astha’s team. The Policy is applicable to Company’s corporate office, warehouse, retail stores,
            and to all associated stakeholders including management, employees, vendors/suppliers, contractors, visitors, the public,
            and the community around the Company’s existing facilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
