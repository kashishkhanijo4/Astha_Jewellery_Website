import React, { useState } from 'react';

const OfferAstha = () => {
  // Sample data for the terms and conditions, you can extend it as needed
  const [offerTerms, setOfferTerms] = useState([
    {
      title: "Terms and Conditions of the Program",
      subTitle: "SBI Cashback Offer",
      items: [
        "This Marketing Program (“Offer”) is offered by SBI Card & Payment Services Ltd. (“SBICPSL”) under an arrangement with Kushal's Retail Pvt Ltd (Partner).",
        "It is open to all legal residents of India holding a valid and current SBI/Tata Credit Card excluding SBI/Tata Corporate Credit Card, SBI Paytm Cobrand Card & SBI Cashback Credit Card (“Cardholder”).",
        "The Validity of the Offer (“Offer Term”) is from 01.03.2024 (00:00 hrs.) expiring on 31.03.2024 (23:59 hrs.).",
        "Under this Offer, cardholder can avail: 5% Cashback at Partner (mentioned on www.sbicard.com) using SBI Credit card.",
        "Minimum Transaction Amount: INR 3500. Maximum Cashback: 500 per card account during the term only.",
        "The offer shall be applicable on all stores.",
        "Delinquent and blocked SBI/Tata Cardholders will not qualify for this Offer.",
        "Cashback for eligible transactions would be posted by 27.05.2024."
      ],
    },
    {
      title: "OTHER TERMS AND CONDITIONS",
      subTitle: "",
      items: [
        "The above Offer is by way of a special offer for SBI/Tata Credit Cardholders.",
        "Cashback will be posted only for those transactions where Merchant ID / Terminal ID is available with SBI Card.",
        "Reward points accrued on offer eligible transactions will be forfeited.",
        "Any query regarding the program will be entertained only till 31.03.2024.",
        "SBICPSL does not endorse any of the products or brands being offered under the Program.",
        "Pictures of products shown in the communication may not bear a resemblance to the actual products.",
        "SBICPSL will not be liable for any technical issues at the Partner platform."
      ],
    },
  ]);

  return (
    <div className="offer">
      <h1 className="majortitle">Offer T&amp;C</h1>

      <div className="rte">
        {offerTerms.map((section, index) => (
          <div key={index}>
            <h4 className='astha-title'  style={{ textAlign: 'center', textDecoration: 'underline' }}>
              {section.title}
            </h4>
            {section.subTitle && (
              <h5 className='astha-title' style={{ textAlign: 'center', textDecoration: 'underline' }}>
                {section.subTitle} 
              </h5>
            )}

            <ol >
              {section.items.map((item, idx) => (
                <li key={idx} style={{ fontWeight: 400 }}>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferAstha;
