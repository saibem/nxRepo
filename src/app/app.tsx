// eslint-disable-next-line @typescript-eslint/no-unused-vars

import React from "react";
import {Link, Route, Routes} from "react-router-dom";
import FirstComponent from "../../first-component/src/lib/first-component";
import SecondComponent from "../../second-component/src/lib/second-component";

export function App() {
  return (
      <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center', flexDirection: 'column'}}>
          <Routes>
              <Route path="/" element={<FirstComponent/>} />
              <Route path="/second" element={<SecondComponent/>} />
          </Routes>
      </div>
  );
}

export default App;
