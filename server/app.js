const express = require("express");
const xml2js = require("xml2js");
const request = require("request");

const app = express();
const parser = new xml2js.Parser();

app.get("/feed", (req, res) => {
  request.get("https://dev.tedooo.com/feed.xml", (err, response, body) => {
    if (err) return res.send(err);

    parser.parseString(body, (err, result) => {
      if (err) return res.send(err);

      const items = result.result.Data;
      const feedItems = items.map((item) => ({
        id: item.id[0],
        userId: item.userId[0],
        avatar: item.avatar[0],
        comments: item.comments[0],
        date: item.date[0],
        didLike: item.didLike[0],
        images: item.images[0],
        likes: item.likes[0],
        premium: item.premium[0],
        shopId: item.shopId[0],
        shopName: item.shopName[0],
        text: item.text[0],
        username: item.username[0],
      }));

      res.send(feedItems);
    });
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
