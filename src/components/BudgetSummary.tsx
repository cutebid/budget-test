import { Box, Card, CardBody, Flex, Heading, Text } from "@chakra-ui/react";
import { nairaIcon } from "../utils/svg";

const BudgetSummary = () => {
  return (
    <div>
      <Box px={{ base: 0, md: 8 }} bg="#fcfcfc">
        <Box mt="28px" mb="10px">
          <Flex>
            <span>{nairaIcon}</span>
            <Text
              textColor="#707480"
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight={400}
              ml={2}
            >
              Monthly Budget
            </Text>
          </Flex>
        </Box>
        <Card>
          <CardBody>
            <Heading color={"#001233"} fontSize="28px" fontFamily={"stdBlack"}>
              ₦120,000
            </Heading>
          </CardBody>
        </Card>
      </Box>
    </div>
  );
};

export default BudgetSummary;
