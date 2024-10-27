import React from 'react';
import HeaderNavbar from '../components/share/HeaderNavbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
      
      return (
            <div>
            <HeaderNavbar></HeaderNavbar>
            <Outlet></Outlet>
                  
            </div>
      );
};

export default MainLayout;