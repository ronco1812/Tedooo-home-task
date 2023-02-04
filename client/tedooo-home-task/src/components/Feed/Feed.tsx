import React, { useEffect, useState } from "react";
import { feedItem } from "../../types/FeedItem.type";
import FeedCard from "../FeedCard/FeedCard";

const Feed: React.FC = () => {
  const [feed, setFeed] = useState<feedItem[]>();
  useEffect(() => {
    fetch("http://localhost:3000/feed")
      .then((res) => res.json())
      .then((feed) => {
        setFeed(feed);
      });
  }, []);
  return (
    <div>
      {!feed ? (
        <div>Loading...</div>
      ) : (
        feed.map((feedItem) => (
          <FeedCard key={feedItem.id} feedItem={feedItem} />
        ))
      )}
    </div>
  );
};

export default Feed;
