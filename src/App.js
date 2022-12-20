import React from "react";
import Activity from "./component/Activity";
import Navbar from "./component/Navbar";
import Data from "./component/Data";
import Faq from "./component/Faq";
import { AirbnbCard } from "./component/Box";

const App = () => {
  return (
    <div>
      <Navbar />
      <Activity />
      {/* <Data /> */}
      <Faq />
      <AirbnbCard />
    </div>
  );
};

export default App;
