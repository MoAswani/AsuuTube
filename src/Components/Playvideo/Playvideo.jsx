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
  const fetchVideoData = async () => {
    const videoData_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=68&videoCategoryId=${videoId}&key=${API_KEY}`;
    await fetch(videoData_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  useEffect(() => {
    fetchVideoData();
  }, []);

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
            : "Loading Views..."}{" "}
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
        <img src={jack} alt="" />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Channel Name"}</p>
          <span>250 Subscribers</span>
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
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Arnold Yego <span>1 hours ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              corporis iure eos omnis cum mollitia ipsa tempore possimus hic
              vel, neque culpa, quia optio?
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>19 Likes</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Jackline Kiswili <span>2 hours ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              corporis iure eos omnis cum mollitia ipsa tempore possimus hic
              vel, neque culpa, quia optio?
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>19 Likes</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Felics Getiria <span>3 hours ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              corporis iure eos omnis cum mollitia ipsa tempore possimus hic
              vel, neque culpa, quia optio?
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>19 Likes</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Stacy Medina <span>10 hours ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              corporis iure eos omnis cum mollitia ipsa tempore possimus hic
              vel, neque culpa, quia optio?
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>19 Likes</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>
              Sammy Kinuthia <span>2 days ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              corporis iure eos omnis cum mollitia ipsa tempore possimus hic
              vel, neque culpa, quia optio?
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>19 Likes</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playvideo;
