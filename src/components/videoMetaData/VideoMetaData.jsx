import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import numeral from 'numeral';
import ShowMoreText from 'react-show-more-text';
import HelmetCustom from '../HelmetCustom';

import { MdThumbUp, MdThumbDown } from 'react-icons/md';

import { checkSubscriptionStatus, getChannelDetails } from '../../redux/actions/channel.action';

import './_videoMetaData.scss';



const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {


    const { channelId, channelTitle, description, title, publishedAt } = snippet;
    const { viewCount, likeCount } = statistics;


    const dispatch = useDispatch()

    const { snippet: channelSnippet, statistics: channelStatistics } = useSelector(state => state.channelDetails.channel)

    const subscriptionStatus = useSelector(state => state.channelDetails.subscriptionStatus)
    useEffect(() => {

        dispatch(getChannelDetails(channelId))
        dispatch(checkSubscriptionStatus(channelId))
    }, [dispatch, channelId])

    return (
        <div className="videoMetaData py-2">
            <HelmetCustom title={title} description={description} />

            <div className="videoMetaData__top">

                <h5>{title}</h5>
                <div className="d-flex justify-content-between align-items-center py-1">
                    <span>
                        {numeral(viewCount).format("0.a")} Views ● {moment(publishedAt).fromNow()}
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
                    <img src={channelSnippet?.thumbnails?.default?.url}
                        alt="img" className="rounded-circle mr-3" />

                    <div className="d-flex flex-column">
                        <span>{channelTitle}</span>
                        <span>{numeral(channelStatistics?.subscriberCount).format("0.a")} Subscribers</span>
                    </div>
                </div>

                <button className={`btn border-0 p-2 m-2 ${subscriptionStatus && 'btn-gray'}`}>{subscriptionStatus ? 'Subscribed' : 'Subscribe'}</button>
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