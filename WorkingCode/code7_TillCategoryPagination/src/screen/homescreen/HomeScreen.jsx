import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import Video from '../../components/video/Video';

import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action';

import InfiniteScroll from 'react-infinite-scroll-component';

import Spinner from 'react-bootstrap/Spinner';
import SkeletonVideo from '../../components/skeletons/SkeletonVideo';


const HomeScreen = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos())

  }, [dispatch])


  const {videos, activeCategory, loading} = useSelector(state=>state.homeVideos) 

  const fetchData = () => {
    if(activeCategory === "All"){
      dispatch(getPopularVideos())
    }
    else{
      dispatch(getVideosByCategory(activeCategory))
    }
  }

  
  return (
    <Container>

        <CategoriesBar />

        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          Loader={
            <Spinner animation="border" variant="primary" />
          }
          >
        <Row>
        
        
            {!loading ? videos.map((video) => (
                    <Col lg={3} md={4} >
                        <Video video={video} key={video.id}/>
                    </Col>
                ))

                : [...Array(20)].map(() => (
                  <Col lg={3} md={4} >
                    <SkeletonVideo />
                    
                  </Col>
                  
                ))
                 
                }
          
        </Row>
        </InfiniteScroll>
    </Container>
  )
}

export default HomeScreen;