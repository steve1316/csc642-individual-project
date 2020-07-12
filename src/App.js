import React from "react";
import { Route } from "react-router-dom";

// Import Pages
import Survey from "./Pages/Survey";
import Results from "./Pages/Results";

function App() {
  return (
    <div>
      <Route exact path="/" component={Survey} />
      <Route exact path="/survey" component={Survey} />
      <Route exact path="/results" component={Results} />
    </div>
  );
}

export default App;
