import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import Backlog from "./pages/Backlog";
import Completed from "./pages/Completed";
import InProgress from "./pages/InProgress";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

import { useSelector} from 'react-redux';

function App() {
  const DATA = useSelector((state) => state.todos); //get data from store
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/backlog" />
        </Route>
        <Route path="/backlog" exact>
          <Backlog data={DATA}/>
        </Route>
        <Route path="/completed">
          <Completed data={DATA}/>
        </Route>
        <Route path="/in-progress">
          <InProgress data={DATA}/>
        </Route>
        <Route path="*">
          {/* this route is for every match. so it is put in end. if no route matches, this becomes the fallback route */}
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
