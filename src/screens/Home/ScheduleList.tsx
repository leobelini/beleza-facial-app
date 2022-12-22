import {
  Avatar,
  Box,
  Center,
  Container,
  Divider,
  HStack,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export const ScheduleList = () => {
  return (
    <ScrollView>
      <Center>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <Item key={i} />
        ))}
      </Center>
    </ScrollView>
  );
};

const Item = () => {
  return (
    <Container width="full" mt={6}>
      <Box width="full" borderColor="coolGray.200" borderWidth={1} padding={4}>
        <HStack>
          <Center>
            <Avatar size={"sm"} backgroundColor="coolGray.100">
              <MaterialIcons name="person" size={16} />
            </Avatar>
          </Center>
          <Center ml={2}>
            <Text bold>Leonardo Siervo Belini</Text>
          </Center>
        </HStack>
        <Divider mt={2} mb={2} />
        <VStack>
          <Text>
            <Text bold>Responsável:</Text> <Text>Ana Elisa</Text>
          </Text>
          <Text>
            <Text bold>Serviço:</Text> <Text>Limpeza de pele</Text>
          </Text>
          <Text>
            <Text bold>Horário:</Text> <Text>03/12/2022 09:00h</Text>
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};
