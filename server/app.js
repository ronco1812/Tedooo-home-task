const express = require("express");
const xml2js = require("xml2js");
const request = require("request");

const app = express();
const parser = new xml2js.Parser();

app.get("/feed", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  request.get("https://dev.tedooo.com/feed.xml", (err, response, body) => {
    if (err) return res.send(err);

    parser.parseString(body, (err, result) => {
      if (err) return res.send(err);

      const items = result.result.Data;
      const feedItems = items.map((item) => {
        const firstTwoImages = item.images && item.images.slice(0, 2);
        const totalLikes =
          item.didLike[0] === "true" && item.likes[0] === "0"
            ? 1
            : item.likes[0];
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
      const pageSize = 6;
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const pagedItems = feedItems.slice(startIndex, endIndex);
      res.send({
        items: pagedItems,
        totalPages: Math.round(feedItems.length / 6) + 1,
      });
    });
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
