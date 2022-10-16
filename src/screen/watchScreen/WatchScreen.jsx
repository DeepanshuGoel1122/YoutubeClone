import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import VideoMetaData from '../../components/videoMetaData/VideoMetaData';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import Comments from '../../components/comments/Comments';
import HelmetCustom from '../../components/HelmetCustom';

import { getRelatedVideos, getVideoById } from '../../redux/actions/videos.action';

import './_watchScreen.scss';



const WatchScreen = () => {


  const { accessToken, loading } = useSelector(state => state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth')
    }


  }, [accessToken, loading, navigate])

  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)








  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideoById(id))

    dispatch(getRelatedVideos(id))

  }, [dispatch, id])


  const { videos, loading: relatedVideosLoading } = useSelector(state => state.relatedVideos)

  const { video, loading2 } = useSelector(state => state.selectedVideo)

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />

      <div className="app__container">
        <Sidebar sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">

          {/* -------------------------------------------------------------------------------- */}

          <Row>
            <HelmetCustom title={video?.snippet?.title} />
            <Col lg={8}>

              <div className='watchScreen__player'>

                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={video?.snippet?.title}
                  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>

              {
                !loading2 ? <VideoMetaData video={video} videoId={id} /> : <h2>Loading...</h2>
              }

              <Comments videoId={id} totalComments={video?.statistics?.commentCount} />
            </Col>


            <Col lg={4}>
              {
                !loading ?
                  videos?.filter(video => video.snippet)
                    .map(video => (<VideoHorizontal video={video} key={video.id.videoId} />
                    )) :
                  <SkeletonTheme baseColor='#3c4147' highlightColor='#343a40'>
                    <Skeleton width='100%' height='130px' count={15} />
                  </SkeletonTheme>
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
