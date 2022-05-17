import React from "react";
import data from "./data";

import List from "./List";
function App() {
  return (
    <div className='container'>
      <h3>{data.length} Today's Birthday</h3>
      <List />
    </div>
  );
}

export default App;
