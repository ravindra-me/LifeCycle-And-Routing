import React from "react";
import { Link } from "react-router-dom";
function Article(props) {
  return (
    <>
      <Link to="/articles">
        <h4 style={{ marginBottom: "1rem" }}>👈 Go back to articles</h4>
      </Link>
      <h1>
        The slug of the article is::: <b>{props.match.params.slug}</b>!
      </h1>
    </>
  );
}

export default Article;
