import React from "react";
import "./Navbar.css";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="innerDiv">
        <div className="left"> CHERRI LEARN</div>

        <div className="right">
          <div> Home </div>
          <div> About</div>
          <div className="search">
            <img
              src="https://th.bing.com/th/id/OIP.LwNGX9Hx0mIyG98BgbbpMwHaHa?pid=ImgDet&rs=1"
              alt=""
            />
          </div>

          <div className="contactUs">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input type="tel" placeholder="Contact Us" />
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
