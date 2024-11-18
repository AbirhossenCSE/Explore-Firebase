import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/layout-component/LeftNavbar';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>
                <section className='w-11/12 mx-auto p-2'>
                    <Navbar></Navbar>
                </section>
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12'>
                <aside className='left col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6'>Main Content</section>
                <aside className='col-span-3'>Right Navbar</aside>
            </main>
        </div>
    );
};

export default HomeLayout;