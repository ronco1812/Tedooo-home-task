import React, { useEffect, useState } from "react";
import { feedItem } from "../../types/FeedItem";
import FeedCard from "../FeedCard/FeedCard";
import { Container } from "./styles";

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
    <Container>
      {!feed ? (
        <div>Loading...</div>
      ) : (
        feed.map((feedItem) => (
          <FeedCard key={feedItem.id} feedItem={feedItem} />
        ))
      )}
    </Container>
  );
};

export default Feed;
