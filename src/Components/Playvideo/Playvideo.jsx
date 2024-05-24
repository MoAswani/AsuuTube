import React, { useEffect, useState } from "react";
import "./Playvideo.css";
import video1 from "../../assets/KarateVid.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const Playvideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    //This is for Video data
    const videoData_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20contentDetails%2C%20statistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoData_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    //This is for channel data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    //Fetching video comments
    const comments_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=500&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comments_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Video Title"}</h3>
      <div className="play-video-info">
        <p>
          {apiData
            ? value_converter(apiData.statistics.viewCount)
            : "Loading viewCount"}{" "}
          &bull;{" "}
          {apiData
            ? moment(apiData.snippet.publishedAt).fromNow()
            : "Loading Upload time..."}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {apiData ? value_converter(apiData.statistics.likeCount) : "..."}
          </span>
          <span>
            <img src={dislike} alt="" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : "L"}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Channel Name"}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "Loading"}{" "}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Loading Video description..."}
        </p>
        <hr />
        <h4>
          {apiData
            ? value_converter(apiData.statistics.commentCount)
            : "Loading"}{" "}
          Comments
        </h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img
                src={
                  commentData
                    ? item.snippet.topLevelComment.snippet.authorProfileImageUrl
                    : user_profile
                }
                alt=""
              />
              <div>
                <h3>
                  {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                  <span>
                    {moment(
                      item.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow()}
                  </span>
                </h3>
                <p>{item.snippet.topLevelComment.snippet.textOriginal}</p>
                <div className="comment-action">
                  <img src={like} alt="" />
                  <span>
                    {value_converter(
                      item.snippet.topLevelComment.snippet.likeCount
                    )}{" "}
                    Likes
                  </span>
                  <img src={dislike} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Playvideo;
