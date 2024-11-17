import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className=' flex flex-col py-2 gap-2 justify-center items-center'>
            <div className="logo">
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h2>Journalism Without Fear or Favour</h2>
            <p>Sunday, November 27, 2025</p>
        </div>
    );
};

export default Header;