import React from "react";
import data from "./data.json";
import { Link } from "react-router-dom";

class Articles extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <ul className="articles">
        {data.map((article) => (
          <li>
            <Link to={"articles/" + article.slug}>
              <h3>{article.title}</h3>
            </Link>
            <small>{article.author}</small>
          </li>
        ))}
      </ul>
    );
  }
}

export default Articles;
