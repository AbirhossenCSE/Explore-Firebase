import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';



const Navbar = () => {

    const { user } = useContext(AuthContext);
    return (
        <div className='flex justify-between'>
            <div>{ user && user.name}</div>
            <div className='nav space-x-5 items-center'>
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='login flex gap-2 items-center'>
                <div>
                    <img src={userIcon} alt="" />
                </div>
                    <Link to='/auth/login' className='btn btn-neutral rounded-none'>Login</Link>
                    
            </div>
            
        </div>
    );
};

export default Navbar;