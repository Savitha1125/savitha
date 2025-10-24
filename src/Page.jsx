import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
  const [showPartnerTooltip, setShowPartnerTooltip] = useState(false);
  const [showCurrencyTooltip, setShowCurrencyTooltip] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('QAR');

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
            <div>Become a vendor</div>
            <div>Become a Francis</div>
          </div>
        )}
      </div>

      <div className="me-5">Track Order</div>
    </div>
  );
}
