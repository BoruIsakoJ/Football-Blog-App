import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="page-wrapper page-overlay">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;