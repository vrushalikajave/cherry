import React from "react";
import "./Activity.css";
//import abc from './abc.png';
//import logo from './logo.svg';
import { Button, Stack } from "@chakra-ui/react";

const Activity = () => {
  return (
    <div className="main">
      <div className="innerDiv">
        <div className="activity">
          <div className="standard">
            {" "}
            <span style={{ color: "purple" }}>1</span> to{" "}
            <span style={{ color: "blue" }}>5</span> Standard{" "}
          </div>
          <div className="standard"> Activity Based</div>
          <div className="para">
            <p>
              Cherri learn education interesting activities in English and
              Kannada based on textbooks , technology systems to compliment
              modern education grammer a boost confidance
            </p>
          </div>
          <div className="choosemedium">
            <h6>Choose your medium</h6>
          </div>
          <div className="dotsDiv">
            <Stack spacing={4} direction="row" align="center">
              <Button colorScheme="blue" size="md" color="white">
                English
              </Button>
              <Button colorScheme="gray" size="md" color="blue">
                Kannada
              </Button>
            </Stack>
          </div>
        </div>

        <div className="abc">
          <img src={require("../images/abc.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Activity;
