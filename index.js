import express from "express";
import { randomUUID } from "crypto";

const app = express();
const posts = [];

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/new", (req, res) => {
  const title = req.body.title?.trim();
  const content = req.body.content?.trim();

  if (title && content) {
    posts.unshift({
      id: randomUUID(),
      title,
      content,
    });
  }

  res.redirect("/");
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("post.ejs", { post });
});

app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("edit.ejs", { post });
});

app.post("/posts/:id/edit", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);

  if (!post) {
    return res.status(404).send("Post not found");
  }

  const title = req.body.title?.trim();
  const content = req.body.content?.trim();

  if (title && content) {
    post.title = title;
    post.content = content;
  }

  res.redirect(`/posts/${post.id}`);
});

app.post("/posts/:id/delete", (req, res) => {
  const index = posts.findIndex((p) => p.id === req.params.id);

  if (index !== -1) {
    posts.splice(index, 1);
  }

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});