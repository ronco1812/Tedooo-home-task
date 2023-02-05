import React, { useRef, useEffect, useState } from "react";
import { feedItem } from "../../types/FeedItem";
import FeedCard from "../FeedCard/FeedCard";
import { Container } from "./styles";
import service from "../../services/service";

const Feed: React.FC = () => {
  const [feed, setFeed] = useState<feedItem[]>([]);
  let [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState<number>(-1);

  const feedRef: any = useRef<HTMLDivElement>(null);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      if (
        !loading ||
        !entries[0].isIntersecting ||
        (totalPages > 0 && totalPages < page)
      )
        return;
      setLoading(true);
      setPage(page++);
    })
  );

  useEffect(() => {
    if (!feedRef || (totalPages > 0 && totalPages < page)) return;
    const lastElement = feedRef.current.lastElementChild;
    observer.current.observe(lastElement);
    return () => observer.current.unobserve(lastElement);
  }, [feed]);

  useEffect(() => {
    if (!loading) return;
    if (totalPages + 1 === page && loading) {
      setLoading(false);
      return;
    }
    (async () => {
      const resFeedItems = await service.getFeedItems(page);

      if (!resFeedItems) return;

      setTotalPages(resFeedItems.totalPages);
      setFeed([...feed, ...resFeedItems.items]);
      setLoading(false);
    })();
  }, [loading, feed, page, totalPages]);

  return (
    <Container ref={feedRef}>
      {feed ? (
        feed.map((feedItem) => (
          <FeedCard key={feedItem.id} feedItem={feedItem} />
        ))
      ) : (
        <div>Sorry an error has occurred, please try later.</div>
      )}
      {loading && <div>Loading...</div>}
    </Container>
  );
};

export default Feed;
