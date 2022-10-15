import React from 'react'
import './_videoHorizontal.scss'

import { AiFillEye } from 'react-icons/ai'

import moment from 'moment';
import numeral from 'numeral';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Row, Col } from 'react-bootstrap';

const VideoHorizontal = () => {


  const seconds = moment.duration(100).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  return (
    <Row className="videoHorizontal m-1 py-2 align-items-center">

      <Col xs={6} md={4} className="videoHorizontal__left">

        <LazyLoadImage src="https://i.ytimg.com/vi/1D7HZw9RQ9M/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmNEuMh12wPWekEU-PLFPmvl6afA" effect='blur' className="videoHorizontal__thumbnail" wrapperClassName='videoHorizontal__thumbnail-wrapper' />

        <span className="video__top__duration">{_duration}</span>
      </Col>



      <Col xs={6} md={8} className="videoHorizontal__right p-0">

        <p className='videoHorizontal__title mb-1'>
          I am full stack Developer
        </p>

        <div className="videoHorizontal__details">
          <AiFillEye />{numeral(1000000).format("0.a")} Views ●
          {moment('2022-09-07').fromNow()}
        </div>

        <div className="videoHorizontal__channel d-flex align-items-center my-1">

          {/* <LazyLoadImage src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" effect='blur' /> */}
          <p>My Channel</p>
        </div>
      </Col>

    </Row>
  )
}

export default VideoHorizontal