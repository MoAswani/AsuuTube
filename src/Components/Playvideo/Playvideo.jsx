import React from "react";
import "./Playvideo.css";
import video1 from "../../assets/KarateVid.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const Playvideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Aswani Bassai Dai</h3>
      <div className="play-video-info">
        <p>2.4k Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            234
          </span>
          <span>
            <img src={dislike} alt="" />4
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
          <p>MoAswani</p>
          <span>250 Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>All Staff Warehouse</p>
        <p>Anything you looking for, we gotcha. Learn with me</p>
        <hr />
        <h4>432 Comments</h4>
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
