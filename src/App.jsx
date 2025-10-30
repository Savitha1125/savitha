import { Routes, Route, useLocation } from 'react-router-dom';
import Page from './Page';
import VendorForm from './Vendor';
import Franchise from './Franchise';
import DeliveryLocation from './Location';
import SearchBar from './SearchBar';

export default function App() {
  const location = useLocation();
  const hideHeaderRoutes = ['/vendor','/franchise'];
  
  // Check if current route is in hide list
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {/* Show SearchBar and DeliveryLocation only if not in hide list */}
      {!shouldHideHeader && (
        <>
          <SearchBar />
          <DeliveryLocation />
        </>
      )}

      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/vendor" element={<VendorForm />} />
        <Route path="/franchise" element={<Franchise />} />
      </Routes>
    </>
  );
}
