import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';

const Layout = () => {
    const {state} = useNavigation()
    return (
        <div className='bg-amber-100 space-y-7'>
            <Navbar></Navbar>
            <main>
                {
                    state == 'loading' ? <span className="loading loading-spinner loading-xl"></span> : <Outlet></Outlet>
                }
               
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;