import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { WhiskyList } from "./components/WhiskyList";

function App() {
  return (
    <Grid
      templateAreas={`"header"
                  "main"
                  "footer"`}
      gridTemplateRows={{ base: "1fr", lg: "90px 1fr" }}
      gridTemplateColumns={{ base: "1fr", lg: "100% 1fr" }}
      h="200px"
      gap="1"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"header"}>
        <NavBar onSearch={(searchText) => console.log(searchText)} />
      </GridItem>
      <GridItem pl="2" bg={"yellow.200"} area={"main"} width="100%">
        <WhiskyList />
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
