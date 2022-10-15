import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';
import HelmetCustom from '../../components/HelmetCustom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import numeral from 'numeral';

import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Video from '../../components/video/Video';

import { getVideosByChannel } from '../../redux/actions/videos.action';
import { getChannelDetails } from '../../redux/actions/channel.action';

import './_channelScreen.scss';



const ChannelScreen = () => {



  const { accessToken, loading } = useSelector(state => state.auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth')
    }


  }, [accessToken, loading, navigate])

  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)







  const { channelId } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideosByChannel(channelId))
    dispatch(getChannelDetails(channelId))

  }, [dispatch, channelId])

  const { videos, loading: channelVideos } = useSelector(state => state.channelVideos)
  const { snippet, statistics } = useSelector(state => state.channelDetails.channel)




  return (
    <>
      <HelmetCustom title={snippet?.title} />


      <Header handleToggleSidebar={handleToggleSidebar} />

      <div className="app__container">
        <Sidebar sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">



          <div className='px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader'>
            <div className='d-flex align-items-center'>
              <img src={snippet?.thumbnails?.default?.url} alt='' />

              <div className='ml-3 channelHeader__details'>
                <h3>{snippet?.title}</h3>
                <span>
                  {numeral(statistics?.subscriberCount).format('0.a')}{' '}
                  subscribers
                </span>
              </div>
            </div>

            <button>Subscribe</button>
          </div>

          <Container>
            <Row className="mt-2">


              {
                !loading ? videos?.map(video => <Col md={4} lg={3}>

                  <Video video={video} channelScreen />
                </Col>) :

                  [...Array(15)].map(() =>
                    <Col md={4} lg={3}>

                      <SkeletonTheme baseColor='#3c4147' highlightColor='#343a40'>
                        <Skeleton width='100%' height='140px' />
                      </SkeletonTheme>
                    </Col>
                  )
              }

            </Row>

          </Container>


        </Container>
      </div>

    </>

  )
}

export default ChannelScreen