import "../App.css";
import { Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Questions from "./Questions";
function App() {
  return (
    <>
      <Route path="/" component={Dashboard} exact />
      <Route path="/result">
        <Dashboard />
      </Route>
    </>
  );
}

export default App;
