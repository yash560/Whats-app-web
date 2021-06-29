import "./App.css";
import Sidebar from "./Sidebar";
import Logi from "./Logi";

import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <>
      <div className="backgroundDiv">
        {!user ? (
          <Logi />
        ) : (
          <div className="app">
            <Router>
              <div className="side">
                <Sidebar />
              </div>
              <div className="chatcomponent">
                <Switch>
                  <Route path="/">
                    <Chat />
                  </Route>

                  <Route path="/rooms/:roomId">
                    <Chat />
                  </Route>
                </Switch>{" "}
              </div>
            </Router>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
