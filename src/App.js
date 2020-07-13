import React from "react";
import { Route } from "react-router-dom";

// Import Pages
import Survey from "./Pages/Survey/Survey";
import Results from "./Pages/Results/Results";

function App() {
  return (
    <div>
      <Route exact path="/" component={Survey} />
      <Route path="/survey" component={Survey} />
      <Route path="/results" component={Results} />
    </div>
  );
}

export default App;
