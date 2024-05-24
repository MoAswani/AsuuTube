import React, { useEffect, useState } from "react";
import "./Recommended.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { API_KEY } from "../../data";

const Recommended = ({ categoryId }) => {
  const [recommendedVideo, setRecommendedVideo] = useState([]);

  const fetchData = async () => {
    const recommendedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=ke&maxResults=100&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(recommendedVideo_url)
      .then((res) => res.json())
      .then((data) => setRecommendedVideo(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {recommendedVideo.map((index, item) => {
        return (
          <div key={index} className="side-video-list">
            <img src={thumbnail1} alt="" />
            <div className="vid-info">
              <h4>Video Title</h4>
              <p>ChannelName</p>
              <p>250 Views</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Recommended;
