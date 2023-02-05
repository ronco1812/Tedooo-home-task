const axios = require("axios");
const xml2js = require("xml2js");
const { pagination } = require("./service");

const parseXml = (xml) => {
  const parser = new xml2js.Parser();
  return new Promise((resolve, reject) => {
    parser.parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const getFeed = async (page) => {
  try {
    const response = await axios.get("https://dev.tedooo.com/feed.xml");
    const result = await parseXml(response.data);
    const items = result.result.Data;
    const feedItems = items.map((item) => {
      const firstTwoImages = item.images && item.images.slice(0, 2);
      const totalLikes =
        item.didLike[0] === "true" && item.likes[0] === "0" ? 1 : item.likes[0];
      return {
        id: item.id[0],
        userId: item.userId[0],
        avatar: item.avatar[0],
        comments: item.comments[0],
        date: item.date[0],
        didLike: item.didLike[0] === "true" ? true : false,
        images: firstTwoImages,
        likes: totalLikes,
        premium: item.premium[0],
        shopId: item.shopId[0],
        shopName: item.shopName[0],
        text: item.text[0],
        username: item.username[0],
      };
    });
    const pagedItems = pagination(page, feedItems);

    return {
      items: pagedItems,
      totalPages: Math.ceil(feedItems.length / 6),
    };
  } catch (e) {
    console.log("Error - [getFeed:feedController.js]", e);
    return null;
  }
};

exports.getFeed = getFeed;
