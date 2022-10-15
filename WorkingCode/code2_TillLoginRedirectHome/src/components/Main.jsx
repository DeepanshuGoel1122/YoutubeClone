import { useState } from 'react';
import { Container } from 'react-bootstrap'
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import HomeScreen from '../screen/homescreen/HomeScreen';

const Main = () => {

const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />

      <div className="app__container border border-info">
        <Sidebar sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main border border-warning">
          <HomeScreen />
        </Container>
      </div>
    </>
  )
}

export default Main