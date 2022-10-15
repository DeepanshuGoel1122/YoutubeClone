import React from 'react'
import { useState, useEffect } from 'react';
import { Container,Row, Col } from 'react-bootstrap'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './_watchscreen.scss' 
import VideoMetaData from '../../components/videoMetaData/VideoMetaData';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import Comments from '../../components/comments/Comments';

const WatchScreen = () => {
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

{/* -------------------------------------------------------------------------------- */}

          <Row>
            <Col lg={8}>

              <div className='watchScreen__player'>

              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CNQ7g378j5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>

              <VideoMetaData />
              <Comments />
            </Col>
            <Col lg={4}>
              {
                [...Array(10)].map(() => <VideoHorizontal />)
              }
            </Col>
          </Row>


{/* ---------------------------------------------------------------------------------- */}

        </Container>
      </div>
    </>
  )
}

export default WatchScreen