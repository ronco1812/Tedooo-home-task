import axios from "axios";

const getFeedItems = async (page: number) => {
  try {
    const resFeedItems = await axios.get(
      `http://localhost:3000/feed?page=${page}`
    );
    return resFeedItems.data;
  } catch (err) {
    console.log("Error:[getFeedItems:service.ts]");
    return null;
  }
};

const service = {
  getFeedItems,
};

export default service;
