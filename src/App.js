import {Auth} from "./pages";
import {Home} from "./pages";
import {Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Route exact path={['/', '/login', '/registration']} component={Auth}/>
        <Route exact path={'/im'} component={Home}/>
      </div>
    </div>
  );
}

export default App;
