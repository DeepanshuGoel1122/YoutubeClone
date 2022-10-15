import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import HomeScreen from '../screen/homescreen/HomeScreen';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Main = () => {

    const {accessToken,loading} = useSelector(state=>state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if(!loading && !accessToken){
      navigate('/auth')
    }
  
    
  }, [accessToken, loading, navigate])

const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />

      <div className="app__container">
        <Sidebar sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          <HomeScreen />
        </Container>
      </div>
    </>
  )
}

export default Main