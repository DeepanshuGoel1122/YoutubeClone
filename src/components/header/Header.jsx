import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';

import './_header.scss';


const Header = ({ handleToggleSidebar }) => {

   const [input, setInput] = useState('')

   const navigate = useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault()
      navigate(`/search/${input}`)

   }

   // const { photoURL } = useSelector(state=>state.auth?.user)
   return (
      <div className='header '>
         <FaBars
            className='header__menu'
            size={26}
            onClick={() => handleToggleSidebar()}
         />

         <img
            src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
            alt=''
            className='header__logo'
         />

         <form onSubmit={handleSubmit}>
            <input
               type='text'
               placeholder='Search'
               value={input}
               onChange={e => setInput(e.target.value)}
            />
            <button type='submit'>
               <AiOutlineSearch size={22} />
            </button>
         </form>

         <div className='header__icons'>
            <MdNotifications size={28} />
            <MdApps size={28} />
            <img src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png' alt='avatar' />
         </div>
      </div>
   )
}

export default Header