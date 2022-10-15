import React, {useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth.action';

import './_loginScreen.scss'

const LoginScreen = () => {

  const dispatch = useDispatch();

  const accessToken = useSelector(state=>state.auth.accessToken)
  

  const handleLogin = () => {
    dispatch(login())
  }

  const navigate = useNavigate();
  useEffect(() => {
    if(accessToken){
      navigate('/')
    }
  
  }, [accessToken, navigate])
  

  return (
    <div className='login'>
        <div className='login__container'>
            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
            <button onClick={handleLogin}>Google Signin</button>
            <p>Please signin to continue</p>
        </div>
    </div>
  )
}

export default LoginScreen