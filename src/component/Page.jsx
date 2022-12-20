import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { AirbnbCard } from "./Box";

const Page = () => {
  return (
    <div>
      <SimpleGrid minChildWidth="300px" spacing="5px">
        <Box bg="tomato" height="max-content">
          <AirbnbCard />{" "}
        </Box>
        <Box bg="tomato" height="max-content">
          {" "}
          <AirbnbCard />{" "}
        </Box>
        <Box bg="tomato" height="max-content">
          <AirbnbCard />{" "}
        </Box>
        <Box bg="tomato" height="max-content">
          <AirbnbCard />{" "}
        </Box>
        <Box bg="tomato" height="max-content">
          <AirbnbCard />{" "}
        </Box>
        <Box bg="tomato" height="max-content">
          <AirbnbCard />{" "}
        </Box>
        <Box bg="tomato" height="max-content">
          <AirbnbCard />{" "}
        </Box>
        <Box bg="tomato" height="max-content">
          <AirbnbCard />{" "}
        </Box>
        <Box bg="tomato" height="max-content">
          <AirbnbCard />{" "}
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Page;
