import React from 'react'
import './_videoMetaData.scss'

import moment from 'moment';
import numeral from 'numeral';

import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text';

const VideoMetaData = ({video:{snippet,statistics},videoId}) => {


    const {channelId, channelTitle, description, title, publishedAt} = snippet;
    const{viewCount, likeCount} = statistics;
    return (
        <div className="videoMetaData py-2">

            <div className="videoMetaData__top">

                <h5>{title}</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <span>
                        {numeral(viewCount).format("0.a")} Views ●
                        {moment(publishedAt).fromNow()}
                    </span>
                
                <div>
                    <span className="mr-5">
                        <MdThumbUp size={20} /> {numeral(likeCount).format("0.a")}
                    </span>

                    <span className="mr-3">
                        <MdThumbDown size={20} />
                    </span>
                </div>

                </div>

            </div>


            <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex">
                    <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                    alt="img" className="rounder-circle mr-3"/>

                    <div className="d-flex flex-column">
                        <span>{channelTitle}</span>
                        <span>{numeral(1000).format("0.a")} Subscribers</span>
                    </div>
                </div>

                <button className="btn border-0 p-2 m-2">Subscribe</button>
            </div>


            <div className="videoMetaData__description">

            <ShowMoreText
            lines={3}
            more="Show more"
            less="Show less"
            anchorClass="showMoreText"
            expanded={false}
            >
            {description}
            </ShowMoreText>

            </div>
        </div>
    )
}

export default VideoMetaData