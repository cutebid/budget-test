import { useState } from "react";
import HomeIcon from "./Icons/HomeIcon";
import ReportIcon from "./Icons/ReportIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import BudgetIcon from "./Icons/BudgetIcon";
import { Text, Box, Flex } from "@chakra-ui/react";

const AppSidebar = () => {
  const [selectedNav, setSelectedNav] = useState(1);

  const nav = [
    {
      id: 1,
      icon: <HomeIcon fill={selectedNav === 1 ? "#0466C8" : "#C1C4CD"} />,
      title: "Home",
    },
    {
      id: 2,
      icon: <ReportIcon fill={selectedNav === 2 ? "#0466C8" : "#C1C4CD"} />,
      title: "Reports",
    },
    {
      id: 3,
      icon: <ProfileIcon fill={selectedNav === 3 ? "#0466C8" : "#C1C4CD"} />,
      title: "Chat",
    },
    {
      id: 4,
      icon: <BudgetIcon fill={selectedNav === 4 ? "#0466C8" : "#C1C4CD"} />,
      title: "Budget",
    },
    {
      id: 5,
      icon: <ProfileIcon fill={selectedNav === 5 ? "#0466C8" : "#C1C4CD"} />,
      title: "Profile",
    },
  ];

  return (
    <Box>
      <Flex flexDirection={"column"}>
        {nav.map(({ icon, title, id }) => (
          <Box
            key={id}
            onClick={() => setSelectedNav(id)}
            display={"flex"}
            alignItems={"center"}
            mb={3}
            py={"8px"}
            pl={"8px"}
            pr={"60px"}
            cursor={"pointer"}
            bg={selectedNav === id ? "#fcfcfc" : ""}
            borderRadius={8}
            _hover={{ transition: "all 0.3s ease", transform: "scale(1.1)" }}
            transition={"all 0.3s ease"}
          >
            <div>{icon}</div>
            <Text
              mt="10px"
              textColor={selectedNav === id ? "#001233" : "#C1C4CD"}
              fontSize={{ base: "12px", md: "16px" }}
              fontWeight={500}
              ml={4}
            >
              {title}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default AppSidebar;
