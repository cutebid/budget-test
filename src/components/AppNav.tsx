import { useState } from "react";
import HomeIcon from "./Icons/HomeIcon";
import ReportIcon from "./Icons/ReportIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import BudgetIcon from "./Icons/BudgetIcon";
import { Text, Box, Flex } from "@chakra-ui/react";

const AppNav = () => {
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
    <Box pt="24px" pb="18px">
      <Flex justifyContent="space-between">
        {nav.map(({ icon, title, id }) => (
          <Box key={id} onClick={() => setSelectedNav(id)}>
            <div>{icon}</div>
            <Text
              mt="10px"
              textColor={selectedNav === id ? "#001233" : "#C1C4CD"}
              fontSize="12px"
              fontWeight={500}
            >
              {title}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default AppNav;
