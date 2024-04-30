import "./App.css";
import { Box, Heading } from "@chakra-ui/react";
import AppNav from "./components/AppNav";
import AppSidebar from "./components/AppSidebar";
import BudgetSummary from "./components/BudgetSummary";
import BudgetBody from "./components/BudgetBody";

function App() {
  return (
    <Box position={"relative"} px={{ base: 8, md: 0 }} bg="#fcfcfc">
      <Box display={"flex"}>
        <Box
          display={{ base: "none", md: "flex" }}
          w={"100%"}
          maxWidth={"200px"}
          borderRight="1px solid #E7E7E7"
          px={4}
          pt={8}
          bg={"#fff"}
        >
          <AppSidebar />
        </Box>
        <Box w={{ base: "100%" }} py={4}>
          <Heading
            color={"#001233"}
            fontSize="28px"
            borderBottom={{ md: "1px solid #E7E7E7" }}
            px={{ base: 0, md: 8 }}
            pb={{ base: 0, md: 4 }}
          >
            Budgets
          </Heading>
          <BudgetSummary />
          <BudgetBody />
        </Box>
      </Box>

      <Box
        position={"sticky"}
        bottom={0}
        bg="#fff"
        width="100%"
        zIndex={9999}
        display={{ md: "none" }}
      >
        <AppNav />
      </Box>
    </Box>
  );
}

export default App;
