import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Profile = () => {
    const {user} = use(AuthContext);
    const {photoURL, displayName, email} = user
    return (
       <section className='flex flex-col justify-center items-center mx-auto'>
        <div>
            <p className='text-3xl font-bold'>USER INFORMATION</p>
        </div>
         <div>
           <img className='w-[300px] h-[200px]' src={photoURL} alt="" />
        </div>
        <div>
            <p className='text-2xl font-semibold text-red-500'>User Name : {displayName}</p>
            <p className='text-2xl font-semibold text-red-500'>User Email : {email}</p>
        </div>
       </section>
    );
};

export default Profile;