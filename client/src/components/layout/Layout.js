import React from 'react';
import SidebarMenu from '../sidebar-menu/index';
// import MainContent from "../main-content/index"
import SecondaryContent from '../secondary-content/index';
import Footer from '../footer/index';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="all_content">
      {/* {{!-- NAVIGATION --}} */}
      <SidebarMenu />
      <main className="main_content">
        <div className="main_body">
          {/* Research Outlet!!! */}
          <Outlet />
        </div>
        <Footer />
      </main>
      <div className="right">
        <SecondaryContent />
      </div>
      {/* {{!-- Script --}} */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default Layout;
