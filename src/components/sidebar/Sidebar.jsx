import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../redux/actions/auth.action';

import {
   MdSubscriptions,
   MdExitToApp,
   MdThumbUp,
   MdHistory,
   MdLibraryBooks,
   MdHome,
   MdSentimentDissatisfied,
} from 'react-icons/md';

import './_sidebar.scss';




const Sidebar = ({ sidebar }) => {

   const dispatch = useDispatch();
   const logoutHandler = () => {
      dispatch(logout())

   }
   return (
      <nav className={sidebar ? 'sidebar open' : 'sidebar'}>
         <Link to="/">
            <li>
               <MdHome size={23} />
               <span>Home</span>
            </li>
         </Link>

         <Link to="/feed/subscriptions">
            <li>
               <MdSubscriptions size={23} />
               <span>Subscriptions</span>
            </li>
         </Link>


         <li>
            <MdThumbUp size={23} />
            <span>Liked Video</span>
         </li>

         <li>
            <MdHistory size={23} />
            <span>History</span>
         </li>

         <li>
            <MdLibraryBooks size={23} />
            <span>Library</span>
         </li>
         <li>
            <MdSentimentDissatisfied size={23} />
            <span>I don't Know</span>
         </li>

         <hr />

         <li onClick={logoutHandler}>
            <MdExitToApp size={23} />
            <span>Log Out</span>
         </li>

         <hr />
      </nav>

   )
}

export default Sidebar