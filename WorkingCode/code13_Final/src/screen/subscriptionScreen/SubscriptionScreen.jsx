import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import VideoHorizontal from '../../components/videoHorizontal/VideoHorizontal';
import HelmetCustom from '../../components/HelmetCustom';

import { getSubscribedChannels } from '../../redux/actions/videos.action';



const SubscriptionScreen = () => {



  const { accessToken, loading } = useSelector(state => state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth')
    }


  }, [accessToken, loading, navigate])

  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)








  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getSubscribedChannels())
  }, [dispatch])

  const { loading: subscriptionsChannel, videos } = useSelector(state => state.subscriptionsChannel)


  return (
    <>
      <HelmetCustom title="Subscriptions" />


      <Header handleToggleSidebar={handleToggleSidebar} />

      <div className="app__container">
        <Sidebar sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">




          {
            !loading ? (
              videos?.map(video => <VideoHorizontal video={video} key={video.id} subScreen />)
            ) :
              (
                <SkeletonTheme baseColor='#3c4147' highlightColor='#343a40'>
                  <Skeleton width='100%' height='160px' count={20} />
                </SkeletonTheme>
              )
          }




        </Container>
      </div>

    </>

  )
}

export default SubscriptionScreen