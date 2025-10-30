import React, { useState } from 'react';
import './index.css';
import SearchBar from "./SearchBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function Page() {
  const [showPartnerTooltip, setShowPartnerTooltip] = useState(false);
  const [showCurrencyTooltip, setShowCurrencyTooltip] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('QAR');
  
  const navigate = useNavigate();
   
  const currencies = [
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'AED', name: 'United Arab Emirates Dirham' },
    { code: 'SGD', name: 'Singapore Dollar' },
    { code: 'QAR', name: 'Qatari Rial' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound Sterling' },
    { code: 'MYR', name: 'Malaysian Ringgit' },
    { code: 'USD', name: 'United States Dollar' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'NZD', name: 'New Zealand Dollar' },
    { code: 'INR', name: 'Indian Rupee' },
    { code: 'THB', name: 'Thai Baht' }
  ];

  return (
    <>
      <div className="detail d-flex justify-content-end gap-3">
        <div>Help |</div>

        {/* Currency Tooltip */}
        <div
          className="tooltip-container"
          onMouseEnter={() => setShowCurrencyTooltip(true)}
          onMouseLeave={() => setShowCurrencyTooltip(false)}
        >
          Currency - <span style={{ fontWeight: 'bold' }}>{selectedCurrency}</span> |
          {showCurrencyTooltip && (
            <div className="tooltip-single-box1">
              {currencies.map((cur) => (
                <div
                  key={cur.code}
                  className="currency-item"
                  onClick={() => setSelectedCurrency(cur.code)}
                >
                  {cur.code} - {cur.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div>Corporate Gifts |</div>

        {/* Partner With Us Tooltip */}
        <div
          className="tooltip-container"
          onMouseEnter={() => setShowPartnerTooltip(true)}
          onMouseLeave={() => setShowPartnerTooltip(false)}
        >
          Partner With Us |
          {showPartnerTooltip && (
            <div className="tooltip-single-box">
              <div onClick={() => navigate('/vendor')}>Become a Vendor</div>
              <div onClick={() => navigate('/franchise')}>Become a Franchise</div>
            </div>
          )}
        </div>

        <div className="me-5">Track Order</div>
      </div>

      <div className="header-second">
        <div className="logo">
          <img src="https://assets.winni.in/groot/2023/03/09/winni-logo/svgtopng-full-cp.png" alt="winni" style={{ height: "34px",
             marginTop: "33px", width: "144px", marginLeft: "30px",cursor:"pointer" }} 
             onClick={()=>window.location.href="/"}/>
        </div>

        <SearchBar/>
      </div>
    </>
  );
}
