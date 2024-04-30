import { HStack, Divider, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { threeDotIcon } from "../utils/svg";
import CategoryBreakdown from "./CategoryBreakdown";
import Progress from "./Progress";

const BudgetBody = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const summaryTab = [
    {
      id: 1,
      title: "Last Month",
    },
    {
      id: 2,
      title: "This Month",
    },
  ];
  return (
    <div>
      <Box bg="#fff" mt={{ base: 4, md: 8 }} px={{ base: 0, md: 8 }}>
        <HStack justifyContent="space-between" alignItems="center" bg="#fff">
          <HStack spacing={30} mt={4}>
            {summaryTab.map(({ id, title }) => (
              <Box
                key={id}
                onClick={() => setSelectedTab(id)}
                cursor={"pointer"}
              >
                <Text
                  textColor={selectedTab == id ? "#0466C8" : "#707480"}
                  fontSize="16px"
                >
                  {title}
                </Text>
                {selectedTab == id && (
                  <Divider
                    orientation="horizontal"
                    w={30}
                    h="2px"
                    bg="#0466C8"
                  />
                )}
              </Box>
            ))}
          </HStack>
          <span>{threeDotIcon}</span>
        </HStack>
        <Box>
          <Progress />

          <Box textAlign="center">
            <Text textColor="#707480" fontSize="14px">
              Amount spent so far
            </Text>
            <Text textColor="#0466C8" fontSize="16px" mt={1}>
              <strong>₦50,000</strong>/₦120,000
            </Text>
          </Box>
        </Box>
        <CategoryBreakdown />
      </Box>
    </div>
  );
};

export default BudgetBody;
