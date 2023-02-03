import React, { useEffect, useState } from "react";

interface feedItem {
  id: string;
  userId: string;
  avatar: string;
  comments: string;
  date: string | Date;
  didLike: boolean;
  images: string | string[];
  likes: number;
  premium: boolean;
  shopId: string;
  shopName: string;
  text: string;
  username: string;
}

function App() {
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
      {feed?.map((item) => (
        <div key={item.id}>
          <h3>{item.shopName}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
