import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';



const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext);
    return (
        <div className='flex justify-between'>
            <div>{ user && user.email}</div>
            <div className='nav space-x-5 items-center'>
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='login flex gap-2 items-center'>
                <div>
                    {
                        user && user?.email ? ( <div><img className='w-8 h-8 rounded-full' src={user?.photoURL} alt="" /> <p>{user?.displayName}</p></div> ) : (<img src={userIcon} alt="" />)
                    }
                    
                </div>
                {
                    user && user?.email ? ( <button onClick={LogOut} className='btn btn-neutral rounded-none'>LogOut</button> ) : (<Link to='/auth/login' className='btn btn-neutral rounded-none'>Login</Link>)
                }
                    
            </div>
            
        </div>
    );
};

export default Navbar;