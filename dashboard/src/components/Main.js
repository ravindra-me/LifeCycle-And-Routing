import { Route } from "react-router-dom";
import { Home } from "./Home";
import Articles from "./Articles";
import Article from "./Article";
import { Contact } from "./Contact";
function Main(params) {
  return (
    <>
      <div className="page-content">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/articles/:slug" component={Article} />
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/contact" component={Contact} />
      </div>
    </>
  );
}

export default Main;
