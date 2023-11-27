import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { foodIcon, savingsIcon } from "../utils/svg";

const CategoryBreakdown = () => {
  const categoryData = [
    {
      id: 1,
      title: "Food and Drink",
      percentage: "40%",
      ratio: (
        <p>
          <strong>₦50,000</strong>/₦120,000
        </p>
      ),
      icon: foodIcon,
      color: "#C89104",
    },
    {
      id: 2,
      title: "Savings",
      percentage: "20%",
      ratio: (
        <p>
          <strong>₦10,000</strong>/₦24,000
        </p>
      ),
      icon: savingsIcon,
      color: "#038A39",
    },
  ];
  return (
    <div>
      <Heading textColor="#001233" fontSize="21px" mt="33px" mb="30px">
        Category Breakdown
      </Heading>
      <Box>
        {categoryData.map(({ id, title, ratio, percentage, color, icon }) => (
          <Flex justifyContent="space-between" mb="20px" key={id}>
            <Box>
              <Flex alignItems="center">
                <CircularProgress value={49} color={color} thickness="4px">
                  <Flex justifyContent="center" alignItems="center">
                    <CircularProgressLabel mx={3}>{icon}</CircularProgressLabel>
                  </Flex>
                </CircularProgress>
                <Box ml={2}>
                  <Heading fontSize="14px" textColor="#001233">
                    {title}
                  </Heading>
                  <Text fontSize="14px" textColor="#707480">
                    {percentage}
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Text textColor="#001233" fontSize="16px" mt={1}>
              {ratio}
            </Text>
          </Flex>
        ))}
      </Box>
    </div>
  );
};

export default CategoryBreakdown;
