import { Center, Flex, HStack, Icon, IconButton, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

type AppContainerType = {
  children: JSX.Element;
};
const AppContainer = ({ children }: AppContainerType) => {
  return (
    <>
      <HStack
        bg="tertiary.600"
        px="1"
        py="3"
        w="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Center>
          <Text color="white" fontSize="20" fontWeight="bold">
            Ana Elisa Beleza Facial
          </Text>
        </Center>
      </HStack>
      <Flex flex={"1"}>{children}</Flex>
      <HStack
        bg="tertiary.600"
        px="1"
        py="3"
        w="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        <IconButton
          icon={<Icon as={MaterialIcons} name="access-time" color="white" />}
        />
        <IconButton
          icon={<Icon as={MaterialIcons} name="add-circle" color="white" />}
        />
        <IconButton
          icon={<Icon as={MaterialIcons} name="settings" color="white" />}
        />
      </HStack>
    </>
  );
};

export default AppContainer;
