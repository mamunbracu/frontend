

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header';
import Property from './component/Property';
import Issue from './component/Issue';
function App() {
  return (
    <Router>
     <Header />
     <Switch>
       <Route path="/property" component={Property} />
       <Route path="/issue" component={Issue} />
     </Switch>
    </Router>
  );
}

export default App;
