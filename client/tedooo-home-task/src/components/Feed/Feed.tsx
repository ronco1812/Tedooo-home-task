import React, { useRef, useEffect, useState } from "react";
import { feedItem } from "../../types/FeedItem";
import FeedCard from "../FeedCard/FeedCard";
import axios from "axios";
import { Container } from "./styles";

const Feed: React.FC = () => {
  const [feed, setFeed] = useState<feedItem[]>([]);
  let [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState<number>(-1);

  const feedRef = useRef<HTMLDivElement>(null);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      if (!loading) return;
      if (entries[0].isIntersecting) {
        setLoading(true);
        setPage(page++);
      }
    })
  );

  useEffect(() => {
    if (feedRef.current?.lastElementChild && feedRef.current) {
      observer.current.observe(feedRef.current.lastElementChild);
      const lastElement = feedRef.current.lastElementChild;
      return () => observer.current.unobserve(lastElement);
    }
  }, [feed]);

  useEffect(() => {
    if (!loading) return;
    if (totalPages + 1 === page) {
      setLoading(false);
      return;
    }
    (async () => {
      const resFeedItems = await axios.get(
        `http://localhost:3000/feed?page=${page}`
      );
      setTotalPages(resFeedItems.data.totalPages);
      setFeed([...feed, ...resFeedItems.data.items]);
      setLoading(false);
    })();
  }, [loading, feed, page]);

  return (
    <Container ref={feedRef}>
      {feed.map((feedItem) => (
        <FeedCard key={feedItem.id} feedItem={feedItem} />
      ))}
      {loading && <div>Loading...</div>}
    </Container>
  );
};

export default Feed;
