import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';              
import VendorForm from './Vendor';
import Franchise from './Franchise';
import DeliveryLocation from './Location';
import SearchBar from './SearchBar';
import Wishlist from './Wishlist';         
import  DetailPage  from './Detail';

export default function App() {
  const location = useLocation();
  const hideHeaderRoutes = ['/vendor', '/franchise'];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && (
        <>
          <SearchBar />
          <DeliveryLocation />
        </>
      )}

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/vendor" element={<VendorForm />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/wishlist" element={<Wishlist />} /> 
        <Route path="/DetailPage" element={<DetailPage />}/>
      </Routes>
    </>
  );
}
