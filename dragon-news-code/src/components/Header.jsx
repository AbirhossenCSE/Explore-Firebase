import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment/moment';




const Header = () => {
    return (
        <div className=' flex flex-col py-2 gap-2 justify-center items-center'>
            <div className="logo">
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h2>Journalism Without Fear or Favour</h2>
            {/* <p> {moment().format("dddd, MMMM Do YYYY, h:mm:ss a");} </p> */}
            <p> {moment().format('dddd, MMMM Do YYYY')} </p>
        </div>
    );
};

export default Header;